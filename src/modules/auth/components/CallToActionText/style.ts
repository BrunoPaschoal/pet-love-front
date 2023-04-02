import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const DescriptionText = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-size: ${fontSizes.heading_h4};
    font-family: ${fonts.PoppinsMedium};
    color: ${colors.tertiary};
  `}
`;

export const ActionText = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-size: ${fontSizes.heading_h4};
    font-family: ${fonts.PoppinsBold};
    margin-left: 3px;
    color: ${colors.tertiary};
  `}
`;
