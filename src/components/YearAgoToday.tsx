import styled from "@emotion/native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import {
  Default16BoldText,
  Gray10RegularText,
  tempStyle,
  White12BoldText,
} from "./Common";
import { dbService } from "../fbase";
import { Weco } from "../models/weco";

function YearAgoToday() {
  let now = new Date();
  let lastYear = new Date(now.setFullYear(now.getFullYear() - 1))
    .toISOString()
    .split("T")[0];
  let beforeLastYear = new Date(now.setFullYear(now.getFullYear() - 1))
    .toISOString()
    .split("T")[0];

  const [firstItems, setFirstItems] = useState([]);
  const [secondItems, setSecondItems] = useState([]);
  const itemCount = 1;

  useEffect(() => {
    dbService
      .collection("items")
      .where("creatorId", "==", process.env.REACT_APP_ADMIN)
      .where("date", ">=", lastYear)
      .orderBy("date", "asc")
      .limit(itemCount)
      .onSnapshot((snapshot: any) => {
        let itemArray = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFirstItems(itemArray);
      });
  }, []);

  useEffect(() => {
    dbService
      .collection("items")
      .where("creatorId", "==", process.env.REACT_APP_ADMIN)
      .where("date", ">=", beforeLastYear)
      .orderBy("date", "asc")
      .limit(itemCount)
      .onSnapshot((snapshot: any) => {
        let itemArray = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSecondItems(itemArray);
      });
  }, []);

  return (
    <Container>
      {firstItems &&
        firstItems.map((item: Weco) => (
          <Wrap key={item.id}>
            <Title>
              <Default16BoldText>1년 전</Default16BoldText>
              <Gray10RegularText>{item.date}</Gray10RegularText>
            </Title>
            <TempWrap style={tempStyle(item.lowestTemp, item.highestTemp)}>
              <White12BoldText>{item.lowestTemp}°C</White12BoldText>
              <White12BoldText>{item.highestTemp}°C</White12BoldText>
            </TempWrap>
            <ImageView>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                source={{ uri: item.attachmentUrl }}
              />
            </ImageView>
          </Wrap>
        ))}

      {secondItems &&
        secondItems.map((item: Weco) => (
          <Wrap key={item.id}>
            <Title>
              <Default16BoldText>2년 전</Default16BoldText>
              <Gray10RegularText>{item.date}</Gray10RegularText>
            </Title>
            <TempWrap style={tempStyle(item.lowestTemp, item.highestTemp)}>
              <White12BoldText>{item.lowestTemp}°C</White12BoldText>
              <White12BoldText>{item.highestTemp}°C</White12BoldText>
            </TempWrap>
            <ImageView>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                source={{ uri: item.attachmentUrl }}
              />
            </ImageView>
          </Wrap>
        ))}
    </Container>
  );
}

export default YearAgoToday;

const Container = styled.View`
  flex-direction: row;
  margin: 20px 16px;
  justify-content: center;
  align-self: flex-start;
  gap: 15px;
`;

const Wrap = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
`;

const ImageView = styled.View`
  min-height: 164px;
`;

const TempWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Title = styled.View`
  width: 164px;
  margin: 20px 0 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
