import styled, { css } from "@emotion/native";
import React from "react";
import { Text } from "react-native";

function Tags() {
  return (
    <Container>
      <Tag>
        <Text>삼성전자</Text>
      </Tag>
      <Tag>
        <Text>대환대출</Text>
      </Tag>
      <Tag>
        <Text>플랫폼</Text>
      </Tag>
      <Tag>
        <Text>전월세</Text>
      </Tag>
      <Tag>
        <Text>역전현상</Text>
      </Tag>
      <Tag>
        <Text>캥거루족</Text>
      </Tag>
      <Tag>
        <Text>실질소득</Text>
      </Tag>
      <Tag>
        <Text>명목소득</Text>
      </Tag>
    </Container>
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
  padding: 10px 8px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 99px;
`;
