import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
  margin-top: 30px;
`;

export const ShortcutListContainer = styled.View`
  ${({ theme: { margins } }) => css`
    flex-direction: row;
    padding-left: ${margins.screenSideMargin};
  `}
`;
