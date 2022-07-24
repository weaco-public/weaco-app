import React, { useRef, useState } from "react";
import styled from "@emotion/native";
import { dbService } from "../fbase";
import Search from "../../assets/search.svg";

const SearchBar = () => {
  const searchRef = useRef();
  const [items, setItems] = useState([]);

  const searchData = (keyword: string) => {
    dbService
      .collection("items")
      .where("creatorId", "==", process.env.REACT_APP_ADMIN)
      .where("tags", "array-contains", keyword)
      .orderBy("date", "desc")
      .onSnapshot((snapshot: any) => {
        let itemArray = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemArray);
      });
  };

  console.log(items);

  return (
    <Container>
      <SearchIconWrap>{/*<Search width={16} height={16} />*/}</SearchIconWrap>
      <SearchInput
        ref={searchRef}
        placeholder={"키워드 검색"}
        onChangeText={(text: string) => searchData(text)}
      />
    </Container>
  );
};

export default SearchBar;

const Container = styled.View`
  position: relative;
  margin: 16px;
`;

const SearchIconWrap = styled.View`
  position: absolute;
  padding: 10px;
  width: 16px;
  height: 16px;
`;

const SearchInput = styled.TextInput`
  align-self: stretch;
  height: 36px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 99px;
  text-indent: 40px;
`;
