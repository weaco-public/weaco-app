import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/native";
import {
  Default14ReqularText,
  Default16BoldText,
  Gray10RegularText,
} from "./Common";
import { Picker } from "@react-native-picker/picker";
import { Image, Text, View } from "react-native";

function Weather() {
  const API_KEY = process.env.REACT_APP_WEATHER;
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("");
  const [res, setRes] = useState();

  useEffect(() => {
    if (city === "") {
      const { geolocation } = navigator;
      if (!geolocation) {
        onGeoError();
        return;
      }
      navigator.geolocation.getCurrentPosition(onGeoLocale, onGeoError);
    } else {
      selectCity();
    }
  }, [city]);

  const selectCity = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=kr`
    )
      .then((response) => response.json())
      .then((data) => {
        setRes(data);
        setLoading(false);
      });
  };

  const onGeoLocale = (position: any) => {
    const { latitude, longitude } = position.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRes(data);
        setLoading(false);
        setCity(data.name);
      });
  };

  const onGeoError = () => {
    setCity("Seoul");
  };

  const pickerRef = useRef();

  return (
    <Container>
      <Title>
        <Default16BoldText>실시간 날씨</Default16BoldText>
        <DropdownWrap>
          <Picker
            style={{
              borderWidth: 1,
              borderColor: "#eee",
              padding: 10,
              borderRadius: 10,
            }}
            ref={pickerRef}
            selectedValue={city}
            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
          >
            <Picker.Item label={"도시별로 보기"} />
            <Picker.Item label="서울" value="Seoul" />
            <Picker.Item label="부산" value="Busan" />
            <Picker.Item label="인천" value="Incheon" />
            <Picker.Item label="대구" value="Daegu" />
            <Picker.Item label="대전" value="Daejeon" />
            <Picker.Item label="광주" value="Gwangju" />
            <Picker.Item label="수원" value="Suwon-si" />
            <Picker.Item label="울산" value="Ulsan" />
            <Picker.Item label="고양" value="Goyang-si" />
            <Picker.Item label="용인" value="Yongin" />
            <Picker.Item label="양산" value="yangsan" />
            <Picker.Item label="창원" value="Changwon" />
            <Picker.Item label="성남" value="Seongnam-si" />
            <Picker.Item label="청주" value="Cheongju-si" />
            <Picker.Item label="부천" value="Bucheon-si" />
            <Picker.Item label="화성" value="Hwaseong-si" />
            <Picker.Item label="전주" value="Jeonju" />
            <Picker.Item label="천안" value="Cheonan" />
            <Picker.Item label="안산" value="Ansan-si" />
            <Picker.Item label="안양" value="Anyang-si" />
            <Picker.Item label="김해" value="Gimhae" />
            <Picker.Item label="평택" value="Pyeongtaek-si" />
            <Picker.Item label="포항" value="Pohang" />
            <Picker.Item label="의정부" value="Uijeongbu-si" />
            <Picker.Item label="제주" value="Jeju City" />
          </Picker>
        </DropdownWrap>
      </Title>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <TitleWrap>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={{
                uri:
                  "https://openweathermap.org/img/wn/" +
                  res.weather[0].icon +
                  ".png",
              }}
            />
            <Text>{res.main.temp}°C</Text>
            <Text>{res.weather[0].description}</Text>
          </TitleWrap>
          <SubWrap>
            <View>
              <Gray10RegularText>습도</Gray10RegularText>
              <Default14ReqularText>{res.main.humidity} %</Default14ReqularText>
            </View>
            <View>
              <Gray10RegularText>바람</Gray10RegularText>
              <Default14ReqularText>{res.wind.speed} m/s</Default14ReqularText>
            </View>
            <View>
              <Gray10RegularText>구름</Gray10RegularText>
              <Default14ReqularText>{res.clouds.all} %</Default14ReqularText>
            </View>
          </SubWrap>
        </>
      )}
    </Container>
  );
}

export default Weather;

const Container = styled.View`
  margin: 0 16px;
  flex-wrap: wrap;
`;

const DropdownWrap = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const TitleWrap = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const SubWrap = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
  padding: 8px 0;
  background-color: #fff;
  border-radius: 99px;
`;

const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 16px 8px;
`;
