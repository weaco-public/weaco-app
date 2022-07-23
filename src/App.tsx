import styled from "@emotion/native";
import Nav from "./components/Nav";
import Indicator from "./components/Indicator";
import Today from "./components/Today";
import React from "react";
import { Default16BoldText } from "./components/Common";
import YearAgoToday from "./components/YearAgoToday";
import { RefreshControl } from "react-native";
import Weather from "./components/Weather";

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function App() {
  let date = new Date();
  let today: string = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <Container>
      <ScrollContainer
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Nav />
        <Search />
        <Title>
          <Default16BoldText>{today}</Default16BoldText>
          <TitleMore>Show All</TitleMore>
        </Title>
        <Indicator />
        <Today />
        <YearAgoToday />
        <Weather />
      </ScrollContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  background-color: #fbfbfb;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3a3a56;
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
  flex-direction: column;
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
