import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary};
  `}
`;

export const Title = styled.Text`
  ${({ theme: { colors } }) => css`
    font-size: 30px;
    font-weight: 900;
    margin-bottom: 20px;
    color: ${colors.secondary};
  `}
`;
