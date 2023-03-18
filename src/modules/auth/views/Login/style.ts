import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.background};
  `}
`;

export const Title = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-size: ${fontSizes.heading_h1};
    font-family: ${fonts.PoppinsBold};
    margin-bottom: 20px;
    color: ${colors.secondary};
  `}
`;
