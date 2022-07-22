import styled, { css } from "@emotion/native";

export const Default16BoldText = styled.Text`
  color: #3a3a56;
  font-size: 16px;
  font-weight: 700;
`;

export const White12BoldText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`;

export const Gray10RegularText = styled.Text`
  color: #9e9e9e;
  font-size: 10px;
  font-weight: 400;
`;

export const TempNone = css`
  background-color: #35405e;
  color: #35405e;
`;
export const TempCold20 = css`
  background-image: linear-gradient(90deg, #090979 0%, #002fff 100%);
`;
export const TempCold10 = css`
  background-image: linear-gradient(90deg, #002fff 0%, #008cff 100%);
`;
export const TempCold2 = css`
  background-image: linear-gradient(90deg, #008cff 0%, #45d6b7 100%);
`;
export const TempSpring = css`
  background-image: linear-gradient(90deg, #45d6b7 0%, #29c536 100%);
`;
export const TempHot15 = css`
  background-image: linear-gradient(90deg, #29c536 0%, #1b8600 100%);
`;
export const TempHot30 = css`
  background-image: linear-gradient(90deg, #1b8600 0%, #a2a500 100%);
`;
export const TempHot40 = css`
  background-image: linear-gradient(90deg, #a2a500 0%, #ffc400 100%);
`;
export const TempHot50 = css`
  background-image: linear-gradient(90deg, #ffc400 0%, #ff6600 100%);
`;

export const tempStyle = (low: string, high: string) => {
  let mid = Number(low) + Number(high);
  if (mid === 0) return TempNone;
  else if (mid <= -20) return TempCold20;
  else if (mid <= -10 && mid > -20) return TempCold10;
  else if (mid < 8 && mid > -10) return TempCold2;
  else if (mid >= 8 && mid < 15) return TempSpring;
  else if (mid >= 15 && mid < 30) return TempHot15;
  else if (mid >= 30 && mid < 40) return TempHot30;
  else if (mid >= 40 && mid < 50) return TempHot40;
  else if (mid >= 50) return TempHot50;
}