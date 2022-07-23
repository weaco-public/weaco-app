import styled from "@emotion/native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { tempStyle, White12BoldText } from "components/Common";
import { dbService } from "fbase";
import Tags from "components/Tags";
import { Weco } from "models/weco";

function Today() {
  const [items, setItems] = useState([]);
  const [newTags, setNewTags] = useState([]);

  const itemCount = 5;

  useEffect(() => {
    dbService
      .collection("items")
      .where("creatorId", "==", process.env.REACT_APP_ADMIN)
      .orderBy("date", "desc")
      .limit(itemCount)
      .onSnapshot((snapshot: any) => {
        setNewTags(snapshot.docs[0].data().tags);
        let itemArray = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemArray);
      });
  }, []);

  return (
    <>
      <Container horizontal={true} showsHorizontalScrollIndicator={false}>
        {items &&
          items.map((item: Weco) => (
            <Wrap key={item.id}>
              <TempWrap style={tempStyle(item.lowestTemp, item.highestTemp)}>
                <White12BoldText>{item.lowestTemp}°C</White12BoldText>
                <White12BoldText>{item.highestTemp}°C</White12BoldText>
              </TempWrap>
              <Image
                style={{
                  width: 300,
                  height: 300,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                source={{ uri: item.attachmentUrl }}
              />
            </Wrap>
          ))}
      </Container>
      <Tags tags={newTags} />
    </>
  );
}

export default Today;

const Container = styled.ScrollView`
  width: 100%;
  flex-direction: row;
  margin: 20px 16px 0;
  align-self: flex-start;
`;

const TempWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 300px;
  height: 25px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Wrap = styled.View`
  width: 300px;
  height: 325px;
  margin-right: 10px;
  justify-content: flex-start;
  align-items: stretch;
`;
