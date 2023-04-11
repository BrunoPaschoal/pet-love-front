import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.gray_02};
    height: 170px;
    width: 140px;
    margin-right: 10px;
    border-radius: 30px;
  `}
`;
