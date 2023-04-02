import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors, margins } }) => css`
    flex: 1;
    align-items: center;
    padding: ${margins.screenSideMargin};
    background-color: ${colors.background};
  `}
`;

export const Title = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-size: ${fontSizes.heading_h3};
    font-family: ${fonts.PoppinsBold};
    margin-top: 40px;
    color: ${colors.tertiary_light};
  `}
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FooterContent = styled.KeyboardAvoidingView`
  position: absolute;
  bottom: 0;
  justify-content: center;
  padding-bottom: 40px;
`;
