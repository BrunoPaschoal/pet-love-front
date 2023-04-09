import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AvatarContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  overflow: hidden;
`;

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    font-family: ${fonts.PoppinsSemiBold};
    font-size: ${fontSizes.heading_h2};
    color: ${colors.tertiary};
    transform: translateY(2px);
  `}
`;

export const Description = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-family: ${fonts.PoppinsRegular};
    font-size: ${fontSizes.p4};
    color: ${colors.gray_04};
    transform: translateY(-2px);
  `}
`;
