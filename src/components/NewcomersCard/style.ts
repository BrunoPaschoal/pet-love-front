import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.TouchableOpacity`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray_01};
    height: 170px;
    width: 140px;
    margin-right: 10px;
    border-radius: 30px;
    overflow: hidden;
  `}
`;

export const ImageView = styled.ImageBackground`
  height: 100%;
`;

export const Overlay = styled(LinearGradient).attrs({
  colors: ["transparent", "rgba(0,0,0,0.7)"],
})`
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: flex-end;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const TextContainer = styled.View`
  width: 90px;
`;

export const PetName = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    font-family: ${fonts.PoppinsSemiBold};
    font-size: ${fontSizes.heading_h3};
    color: ${colors.white};
    margin-bottom: -5px;
  `}
`;

export const PetCity = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-family: ${fonts.PoppinsMedium};
    font-size: ${fontSizes.p5};
    color: ${colors.white};
  `}
`;

export const IconContainer = styled.TouchableOpacity`
  padding-bottom: 5px;
`;
