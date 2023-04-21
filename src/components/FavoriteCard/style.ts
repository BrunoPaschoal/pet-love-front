import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme: { colors } }) => css`
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-radius: 10px;
    height: 100px;
    margin-bottom: 10px;
    background-color: ${colors.white};
    padding-top: 15px;
    padding-right: 20px;
    padding-bottom: 15px;
    padding-left: 15px;
  `}
`;

export const PetImage = styled.Image`
  height: 100%;
  width: 85px;
  border-radius: 10px;
`;

export const TextContentContainer = styled.View`
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  flex: 1;
  justify-content: center;
`;

export const PetName = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    font-family: ${fonts.PoppinsSemiBold};
    font-size: ${fontSizes.p2};
    color: ${colors.tertiary};
    margin-bottom: -5px;
  `}
`;

export const PetAge = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    margin-bottom: -6px;
    font-family: ${fonts.PoppinsMedium};
    font-size: ${fontSizes.p4};
    color: ${colors.gray_03};
  `}
`;

export const DistanceFlag = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    margin-bottom: -6px;
    font-family: ${fonts.PoppinsMedium};
    font-size: ${fontSizes.p5};
    color: ${colors.gray_02};
  `}
`;
