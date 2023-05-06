import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-top: 50px;
`;

export const ContentBox = styled.View`
  flex-direction: row;
`;

export const IconContainer = styled.TouchableOpacity`
  width: 35px;
  height: 32px;
  position: absolute;
`;

export const TitleContainer = styled.View`
  margin: auto;
`;

export const PageTitle = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-family: ${fonts.PoppinsSemiBold};
    font-size: ${fontSizes.heading_h3};
    color: ${colors.tertiary};
    text-align: center;
    margin-top: 5px;
    max-width: 200px;
  `}
`;
