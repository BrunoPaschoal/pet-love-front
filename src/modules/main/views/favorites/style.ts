import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.background};
  `}
`;

export const HeaderContainer = styled.View`
  ${({ theme: { margins } }) => css`
    align-items: center;
    margin-top: 83px;
    margin-left: ${margins.screenSideMargin};
    margin-right: ${margins.screenSideMargin};
  `}
`;

export const PageTitle = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    color: ${colors.tertiary};
    font-size: ${fontSizes.heading_h3};
    font-family: ${fonts.PoppinsSemiBold};
  `}
`;

export const DescriptionContainer = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const Description = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    color: ${colors.gray_04};
    font-size: ${fontSizes.p2};
    font-family: ${fonts.PoppinsRegular};
  `}
`;
