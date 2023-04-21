import styled, { css } from "styled-components/native";

export const ScrollContainer = styled.ScrollView`
  padding-top: 20px;
`;

export const Container = styled.View`
  ${({ theme: { margins } }) => css`
    padding-left: ${margins.screenSideMargin};
    padding-right: ${margins.screenSideMargin};
  `}
`;
