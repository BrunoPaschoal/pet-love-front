import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors, margins } }) => css`
    flex: 1;
    align-items: center;
    padding: ${margins.screenSideMargin};
    background-color: ${colors.white};
  `}
`;

export const PageContent = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;
