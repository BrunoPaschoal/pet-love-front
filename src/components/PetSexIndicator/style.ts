import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SexName = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-family: ${fonts.PoppinsMedium};
    font-size: ${fontSizes.p3};
    color: ${colors.white};
    margin-left: 3px;
    transform: translateY(3px);
  `}
`;
