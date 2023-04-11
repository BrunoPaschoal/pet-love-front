import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.background};
  `}
`;

export const HeaderContainer = styled.View`
  ${({ theme: { margins } }) => css`
    margin-top: 83px;
    margin-left: ${margins.screenSideMargin};
    margin-right: ${margins.screenSideMargin};
  `}
`;
