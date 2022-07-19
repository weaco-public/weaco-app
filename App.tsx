import styled, { css } from "@emotion/native";
import Nav from "./src/components/Nav";
import Indicator from "./src/components/Indicator";
import Today from "./src/components/Today";
import Tags from "./src/components/Tags";
import React from "react";
import { Default16BoldText } from "./src/components/Common";
import YearAgoToday from "./src/components/YearAgoToday";

export default function App() {
  let date = new Date();
  let today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

  return (
    <Container>
      <Nav />
      <Search />
      <Title>
        <Default16BoldText>{today}</Default16BoldText>
        <TitleMore>Show All</TitleMore>
      </Title>
      <Indicator />
      <Today />
      <Title>
        <Default16BoldText>이슈 키워드</Default16BoldText>
      </Title>
      <Tags />
      <YearAgoToday />
      <Title>
        <Default16BoldText>실시간 날씨</Default16BoldText>
      </Title>
    </Container>
  );
}

const Container = styled.View`
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3a3a56;
`;

const Search = styled.View`
  background: #ddd;
  align-self: stretch;
  height: 36px;
  margin: 6px 16px;
`;

const Title = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
`;

const TitleMore = styled.Text`
  font-size: 12px;
`;
