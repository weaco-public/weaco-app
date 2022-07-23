import styled, { css } from "@emotion/native";
import React from "react";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Default16BoldText } from "./Common";

function Nav() {
  const myIcon = <Icon name="menu" size={24} color="#3A3A56" />;

  return (
    <Container>
      <Image
        style={{ width: 28, height: 28 }}
        source={require("../../assets/logo.png")}
      />
      <List>
        <Default16BoldText style={active}>오늘의 날씨와 경제</Default16BoldText>
        <Default16BoldText style={opacity50}>토픽</Default16BoldText>
      </List>
      <Menu>{myIcon}</Menu>
    </Container>
  );
}

export default Nav;

const active = css`
  border-bottom-width: 2px;
  border-style: solid;
  border-color: #3a3a56;
`;

const opacity50 = css`
  color: rgba(58, 58, 86, 0.5);
`;

const Container = styled.View`
  align-self: stretch;
  height: 28px;
  margin: 6px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const List = styled.View`
  flex-direction: row;
  gap: 30px;
`;

const Menu = styled.View`
  width: 28px;
  height: 28px;
  justify-content: center;
`;
