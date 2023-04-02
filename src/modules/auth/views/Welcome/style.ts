import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.background};
  `}
`;

export const Image = styled.Image`
  margin-bottom: 40px;
  width: 800px;
`;

export const Title = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-size: ${fontSizes.heading_h1};
    font-family: ${fonts.PoppinsSemiBold};
    margin-bottom: 5px;
    color: ${colors.tertiary_light};
  `}
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 75px;
  padding: 0 20px 0 20px;
`;

export const FooterContent = styled.View`
  justify-content: center;
  padding-bottom: 45px;
`;

export const Description = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-size: ${fontSizes.heading_h4};
    font-family: ${fonts.PoppinsMedium};
    text-align: center;
    max-width: 180px;
    margin-bottom: 60px;
    color: ${colors.tertiary};
  `}
`;
