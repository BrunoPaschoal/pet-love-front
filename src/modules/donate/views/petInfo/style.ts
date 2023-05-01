import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors, margins } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: ${margins.screenSideMargin};
    background-color: ${colors.gray_02};
  `}
`;
