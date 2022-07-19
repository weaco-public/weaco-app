import styled, { css } from '@emotion/native';
import React, { useEffect, useState } from 'react';
import { White12BoldText } from './Common';
import { dbService } from '../../fbase';

function Indicator() {
  const [text, setText] = useState('');
  const [sp500, setSp500] = useState("");
  const [dow, setDow] = useState("");
  const [nasdoq, setNasdoq] = useState("");
  const [wti, setWti] = useState("");
  const [dxy, setDxy] = useState("");
  const [vix, setVix] = useState("");
  const [gold, setGold] = useState("");

  useEffect(() => {
    dbService
      .collection('items')
      .where('creatorId', '==', process.env.REACT_APP_ADMIN)
      .orderBy('date', 'desc')
      .limit(1)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length === 0) {
          return setText('');
        }
        const item = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const result = item.shift().text;
        setText(result);
      });
  }, []);

  useEffect(() => {
    const startPoint = text.indexOf("<br>S");
    const endPoint = text.indexOf("원</p>");
    const lineDataOrigin = text.slice(startPoint + 4, endPoint + 1);
    const line = lineDataOrigin.replaceAll(")", "");
    setSp500(sliceLine(line, "S&amp;P500"));
    setDow(sliceLine(line, "다우"));
    setNasdoq(sliceLine(line, "나스닥"));
    setWti(sliceLine(line, "WTI"));
    setDxy(sliceLine(line, "달러인덱스"));
    setVix(sliceLine(line, "VIX"));
    setGold(sliceLine(line, "금"));
  }, [text]);

  const sliceLine = (line: string, title: string) => {
    const startPoint = line.indexOf(title);
    const endPoint = line.indexOf(",", startPoint);
    return line.slice(startPoint + title.length, endPoint);
  };
  const sp500Array = sp500.split("(");
  const dowArray = dow.split("(");
  const nasdoqArray = nasdoq.split("(");
  const wtiArray = wti.split("(");
  const dxyArray = dxy.split("(");
  const vixArray = vix.split("(");
  const goldArray = gold.split("(");

  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      <Summary>
        <Title>S&P500</Title>
        <Title style={sp500.indexOf("-") > 0 ? minus : plus}>{sp500Array[0]}</Title>
        <Percent style={sp500.indexOf("-") > 0 ? minusBg : plusBg}>
          <White12BoldText>{sp500Array[1]}</White12BoldText>
        </Percent>
      </Summary>
      <Summary>
        <Title>다우</Title>
        <Title style={dow.indexOf("-") > 0 ? minus : plus}>{dowArray[0]}</Title>
        <Percent style={dow.indexOf("-") > 0 ? minusBg : plusBg}>
          <White12BoldText>{dowArray[1]}</White12BoldText>
        </Percent>
      </Summary>
      <Summary>
        <Title>나스닥</Title>
        <Title style={nasdoq.indexOf("-") > 0 ? minus : plus}>{nasdoqArray[0]}</Title>
        <Percent style={nasdoq.indexOf("-") > 0 ? minusBg : plusBg}>
          <White12BoldText>{nasdoqArray[1]}</White12BoldText>
        </Percent>
      </Summary>
      <Summary>
        <Title>WTI</Title>
        <Title style={wti.indexOf("-") > 0 ? minus : plus}>{wtiArray[0]}</Title>
        <Percent style={wti.indexOf("-") > 0 ? minusBg : plusBg}>
          <White12BoldText>{wtiArray[1]}</White12BoldText>
        </Percent>
      </Summary>
      <Summary>
        <Title>달러인덱스</Title>
        <Title style={dxy.indexOf("-") > 0 ? minus : plus}>{dxyArray[0]}</Title>
        <Percent style={dxy.indexOf("-") > 0 ? minusBg : plusBg}>
          <White12BoldText>{dxyArray[1]}</White12BoldText>
        </Percent>
      </Summary>
      <Summary>
        <Title>VIX</Title>
        <Title style={vix.indexOf("-") > 0 ? minus : plus}>{vixArray[0]}</Title>
        <Percent style={vix.indexOf("-") > 0 ? minusBg : plusBg}>
          <White12BoldText>{vixArray[1]}</White12BoldText>
        </Percent>
      </Summary>
      <Summary>
        <Title>금</Title>
        <Title style={gold.indexOf("-") > 0 ? minus : plus}>{goldArray[0]}</Title>
        <Percent style={gold.indexOf("-") > 0 ? minusBg : plusBg}>
          <White12BoldText>{goldArray[1]}</White12BoldText>
        </Percent>
      </Summary>
    </Container>
  );
}

export default Indicator;

const plus = css`
  color: #ff6701;
  font-weight: 700;
`;

const plusBg = css`
  background-color: #ff6701;
`;

const minus = css`
  color: #018cff;
  font-weight: 700;
`;

const minusBg = css`
  background-color: #018cff;
`;

const Container = styled.ScrollView`
  width: 100%;
  flex-direction: row;
  margin: 0 16px;
  align-self: flex-start;
`;

const Summary = styled.View`
  width: 80px;
  height: 80px;
  margin-right: 10px;
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
