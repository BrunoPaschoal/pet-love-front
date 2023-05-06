import styled, { css } from "styled-components/native";

interface ButtonProps {
  customMaxWidth?: string;
  isOutline?: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  ${({ theme: { colors }, customMaxWidth, isOutline }) => css`
    background-color: ${isOutline ? colors.white : colors.primary};
    border: ${isOutline ? `2px solid ${colors.gray_02}` : "none"};
    height: 45px;
    border-radius: 5px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: ${customMaxWidth ? customMaxWidth : "100%"};
  `}
`;

interface ButtonTextProps {
  isOutline?: boolean;
}

export const ButtonText = styled.Text<ButtonTextProps>`
  ${({ theme: { colors, fontSizes, fonts }, isOutline }) => css`
    color: ${isOutline ? colors.primary : colors.white};
    font-size: ${fontSizes.heading_h4};
    font-family: ${fonts.PoppinsBold};
  `}
`;
