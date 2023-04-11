import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray_02};
    height: 140px;
    border-radius: 15px;
    margin-bottom: 10px;
  `}
`;
