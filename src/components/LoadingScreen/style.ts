import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.tertiary_light};
  `}
`;
