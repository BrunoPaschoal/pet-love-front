import styled, { css } from "styled-components/native";

export const ScrollViewContainer = styled.ScrollView``;

export const Container = styled.View`
  ${({ theme: { colors, margins } }) => css`
    flex: 1;
    align-items: center;
    padding: ${margins.screenSideMargin};
    background-color: ${colors.background};
  `}
`;

export const FooterContent = styled.KeyboardAvoidingView`
  margin-top: 30px;
  padding-bottom: 15px;
`;

export const Title = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    font-size: ${fontSizes.heading_h3};
    font-family: ${fonts.PoppinsBold};
    margin-top: 40px;
    padding-bottom: 20px;
    color: ${colors.tertiary_light};
  `}
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
