import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};
    flex-direction: row;
    overflow: hidden;
    margin-bottom: 5px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 10px;
    width: 85%;
  `}
`;

export const Content = styled.View`
  padding: 15px;
`;

export const Badge = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.success};
    width: 13px;
  `}
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  transform: translateY(3px);
`;

export const ToastTitle = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    color: ${colors.tertiary};
    font-size: ${fontSizes.p2};
    margin-left: 5px;
    font-family: ${fonts.PoppinsBold};
  `}
`;

export const ToastDescription = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    color: ${colors.gray_03};
    font-size: ${fontSizes.p3};
    font-family: ${fonts.PoppinsMedium};
  `}
`;
