import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors, margins } }) => css`
    flex: 1;
    align-items: center;
    padding: ${margins.screenSideMargin};
    background-color: ${colors.white};
  `}
`;

export const PageContent = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageDescription = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    margin-top: 20px;
    font-family: ${fonts.PoppinsRegular};
    font-size: ${fontSizes.p2};
    color: ${colors.gray_05};
  `}
`;

export const FormContainer = styled.View`
  margin-top: 25px;
  width: 100%;
`;
