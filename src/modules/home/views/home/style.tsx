import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    padding-top: 85px;
    background-color: ${colors.background};
  `}
`;

export const HeaderContainer = styled.View`
  ${({ theme: { margins } }) => css`
    margin-left: ${margins.screenSideMargin};
    margin-right: ${margins.screenSideMargin};
  `}
`;
