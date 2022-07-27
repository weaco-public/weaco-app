import React from "react";
import styled from "@emotion/native";
import Nav from "./src/components/Nav";
import Today from "./src/components/Today";
import YearAgoToday from "./src/components/YearAgoToday";
import Weather from "./src/components/Weather";
import SearchBar from "./src/components/SearchBar";
import { RefreshControl } from "react-native";

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function App() {
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
        <SearchBar />
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
