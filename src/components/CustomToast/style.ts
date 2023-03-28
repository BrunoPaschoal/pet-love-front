import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme: { colors } }) => css`
    align-items: center;
    background-color: ${colors.success};
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 5px;
    border-radius: 6px;
    max-width: 75%;
  `}
`;

export const ToastDescription = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    text-align: center;
    color: ${colors.white};
    font-size: ${fontSizes.p3};
    font-family: ${fonts.PoppinsMedium};
  `}
`;
