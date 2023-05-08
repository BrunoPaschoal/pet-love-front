import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
`;

interface CardBoxProps {
  isSelected: boolean;
}

export const CardBox = styled.View<CardBoxProps>`
  ${({ theme: { colors }, isSelected }) => css`
    width: 130px;
    height: 125px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    border: solid 2px;
    border-color: ${isSelected ? colors.secondary : colors.gray_02};
  `}
`;

export const CardTitle = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    margin-top: 12px;
    font-family: ${fonts.PoppinsSemiBold};
    font-size: ${fontSizes.p1};
    color: ${colors.tertiary};
  `}
`;
