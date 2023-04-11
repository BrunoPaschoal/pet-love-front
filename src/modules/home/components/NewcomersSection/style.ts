import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 25px;
`;

export const Title = styled.Text`
  ${({ theme: { colors, fonts, fontSizes, margins } }) => css`
    padding-left: ${margins.screenSideMargin};
    color: ${colors.tertiary};
    font-family: ${fonts.PoppinsSemiBold};
    font-size: ${fontSizes.heading_h3};
  `}
`;

export const CardsScrollView = styled.ScrollView`
  margin-top: 15px;
`;

export const CardsContainer = styled.View`
  ${({ theme: { margins } }) => css`
    flex-direction: row;
    padding-left: ${margins.screenSideMargin};
  `}
`;
