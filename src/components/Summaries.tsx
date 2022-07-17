import styled, { css } from "@emotion/native";
import React from "react";
import { White12BoldText } from "./Common";

function Summaries() {
  return (
    <Container>
      <Summary>
        <Title>S&P500</Title>
        <Title style={plus}>3902.62</Title>
        <Percent style={percentPlus}>
          <White12BoldText>+1.50%</White12BoldText>
        </Percent>
      </Summary>
      <Summary>
        <Title>다우</Title>
        <Title style={plus}>31384.55</Title>
        <Percent style={percentPlus}>
          <White12BoldText>+1.12%</White12BoldText>
        </Percent>
      </Summary>
      <Summary>
        <Title>나스닥</Title>
        <Title style={minus}>11621.35</Title>
        <Percent style={percentMinus}>
          <White12BoldText>-2.28%</White12BoldText>
        </Percent>
      </Summary>
      <Summary>
        <Title>S&P500</Title>
        <Title style={plus}>3902.62</Title>
        <Percent style={percentPlus}>
          <White12BoldText>+1.50%</White12BoldText>
        </Percent>
      </Summary>
      <Summary>
        <Title>S&P500</Title>
        <Title style={plus}>3902.62</Title>
        <Percent style={percentPlus}>
          <White12BoldText>+1.50%</White12BoldText>
        </Percent>
      </Summary>
    </Container>
  );
}

export default Summaries;

const plus = css`
  color: #ff6701;
  font-weight: 700;
`;

const percentPlus = css`
  background-color: #ff6701;
`;

const minus = css`
  color: #018cff;
  font-weight: 700;
`;

const percentMinus = css`
  background-color: #018cff;
`;

const Container = styled.View`
  flex-direction: row;
  margin: 0 16px;
  justify-content: center;
  align-self: flex-start;
  gap: 10px;
`;

const Summary = styled.View`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ededed;
  border-radius: 5px;
`;

const Title = styled.Text`
  font-size: 12px;
`;

const Percent = styled.View`
  background-color: #ff6701;
  border-radius: 4px;
  padding: 2px 5px;
`;
