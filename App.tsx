import { StyleSheet, Text, View } from "react-native";
import styled, { css } from "@emotion/native";
import Nav from "./src/components/Nav";
import Summaries from "./src/components/Summaries";
import Today from "./src/components/Today";
import Tags from "./src/components/Tags";
import React from "react";
import { Default16BoldText } from "./src/components/Common";
import YearAgoToday from "./src/components/YearAgoToday";

export default function App() {
  return (
    <Container>
      <Nav />
      <Search />
      <Title>
        <Default16BoldText>2022-07-08</Default16BoldText>
        <TitleMore>Show All</TitleMore>
      </Title>
      <Summaries />
      <Today />
      <Title>
        <Default16BoldText>이슈 키워드</Default16BoldText>
      </Title>
      <Tags />
      <YearAgoToday />
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
