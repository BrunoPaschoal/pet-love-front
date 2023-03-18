import styled, { css } from "styled-components/native";

export const Button = styled.TouchableOpacity`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.primary};
    height: 45px;
    border-radius: 5px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    color: ${colors.white};
    font-size: ${fontSizes.heading_h4};
    font-family: ${fonts.PoppinsBold};
  `}
`;
