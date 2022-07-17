import styled, { css } from "@emotion/native";
import React from "react";
import { Image } from "react-native";
import { TempHot50, White12BoldText } from "./Common";

function Today() {
  return (
    <Container>
      <Wrap>
        <TempWrap style={TempHot50}>
          <White12BoldText>25°C</White12BoldText>
          <White12BoldText>29°C</White12BoldText>
        </TempWrap>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("../../assets/2022-07-08.jpg")}
        />
      </Wrap>
      <Wrap>
        <TempWrap style={TempHot50}>
          <White12BoldText>25°C</White12BoldText>
          <White12BoldText>29°C</White12BoldText>
        </TempWrap>
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/weco-8ff84.appspot.com/o/S9nPnnJhejVZ2HJsVVmYaTxTB732%2F918f5dc2-1af7-46f5-90e3-a019fa315a31?alt=media&token=e43bb9c0-f738-4cc5-a4a3-5b7a8381ef60",
          }}
        />
      </Wrap>
      <Wrap>
        <TempWrap style={TempHot50}>
          <White12BoldText>25°C</White12BoldText>
          <White12BoldText>29°C</White12BoldText>
        </TempWrap>
        <Image
          style={{ width: 300, height: 300 }}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/weco-8ff84.appspot.com/o/S9nPnnJhejVZ2HJsVVmYaTxTB732%2F918f5dc2-1af7-46f5-90e3-a019fa315a31?alt=media&token=e43bb9c0-f738-4cc5-a4a3-5b7a8381ef60",
          }}
        />
      </Wrap>
    </Container>
  );
}

export default Today;

const Container = styled.View`
  flex-direction: row;
  margin: 20px 16px 0;
  justify-content: center;
  align-self: flex-start;
  gap: 10px;
`;

const TempWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  witdh: 300px;
  height: 25px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Wrap = styled.View`
  width: 300px;
  height: 325px;
  justify-content: flex-start;
  align-items: stretch;
`;
