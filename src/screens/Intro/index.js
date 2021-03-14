import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Text, View } from "react-native";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${(props) => props.theme.colors.background};
`;

const MainTitle = styled.Text`
  font-size: 54px;
  font-weight: bold;
  /* font-family: "Poppins"; */
  margin-bottom: 15px;
  color: #fff;
`;

const Description = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.lightText};
  
`;

export default function IntroScreen() {
  return (
    <Container>
      <MainTitle>Expensify test</MainTitle>
      <Description>
        A minimalistic approach for managing your expenses
      </Description>
    </Container>
  );
}
