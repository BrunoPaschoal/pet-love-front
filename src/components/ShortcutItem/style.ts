import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  margin-right: 25px;
`;

export const IconContainer = styled.View`
  ${({ theme: { colors } }) => css`
    width: 75px;
    height: 75px;
    border: solid 1px;
    justify-content: center;
    align-items: center;
    border-color: ${colors.gray_02};
    border-radius: 100px;
  `}
`;

export const TitleContainer = styled.View`
  margin-top: 10px;
  max-width: 70px;
`;

export const Title = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-family: ${fonts.PoppinsSemiBold};
    font-size: ${fontSizes.p4};
    color: ${colors.tertiary};
    text-align: center;
  `}
`;
