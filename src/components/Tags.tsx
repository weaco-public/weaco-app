import styled from "@emotion/native";
import React from "react";
import { Text } from "react-native";
import { Default16BoldText } from "./Common";

function Tags(props: any) {
  const skipedKeyword = [
    "오늘의날씨",
    "오늘의경제",
    "날씨",
    "경제",
    "뉴스",
    "오늘날씨",
    "서울날씨",
    "시황",
    "주식",
    "코인",
    "경제뉴스",
    "미국증시",
    "뉴욕증시",
  ];

  return (
    <>
      <Title>
        <Default16BoldText>이슈 키워드</Default16BoldText>
      </Title>
      <Container>
        {props.tags.map(
          (tag: string) =>
            !skipedKeyword.includes(tag) && (
              <Tag key={tag}>
                <Text>{tag}</Text>
              </Tag>
            )
        )}
      </Container>
    </>
  );
}

export default Tags;

const Container = styled.View`
  margin: 0 16px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.View`
  padding: 10px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 99px;
`;

const Title = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
`;
