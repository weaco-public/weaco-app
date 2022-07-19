import styled, { css } from '@emotion/native';
import React from 'react';
import { Image } from 'react-native';
import {
  Default16BoldText,
  Gray10RegularText,
  TempHot50,
  White12BoldText,
} from './Common';

function YearAgoToday() {
  return (
    <Container>
      <Wrap>
        <Title>
          <Default16BoldText>1년 전 오늘</Default16BoldText>
          <Gray10RegularText>2021-07-08</Gray10RegularText>
        </Title>
        <TempWrap style={TempHot50}>
          <White12BoldText>25°C</White12BoldText>
          <White12BoldText>29°C</White12BoldText>
        </TempWrap>
        <ImageView>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/2022-07-08.jpg')}
          />
        </ImageView>
      </Wrap>
      <Wrap>
        <Title>
          <Default16BoldText>2년 전 오늘</Default16BoldText>
          <Gray10RegularText>2020-07-08</Gray10RegularText>
        </Title>
        <TempWrap style={TempHot50}>
          <White12BoldText>25°C</White12BoldText>
          <White12BoldText>29°C</White12BoldText>
        </TempWrap>
        {' '}
        <ImageView>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/weco-8ff84.appspot.com/o/S9nPnnJhejVZ2HJsVVmYaTxTB732%2F918f5dc2-1af7-46f5-90e3-a019fa315a31?alt=media&token=e43bb9c0-f738-4cc5-a4a3-5b7a8381ef60',
            }}
          />
        </ImageView>
      </Wrap>
    </Container>
  );
}

export default YearAgoToday;

const Container = styled.View`
  flex-direction: row;
  margin: 20px 16px;
  justify-content: center;
  align-self: flex-start;
  gap: 15px;
`;

const Wrap = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: stretch;
`;

const ImageView = styled.View`
  min-height: 164px;
`;

const TempWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Title = styled.View`
  width: 164px;
  margin: 20px 0 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
