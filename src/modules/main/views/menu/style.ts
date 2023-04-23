import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.background};
  `}
`;

export const HeaderContainer = styled.View`
  ${({ theme: { margins, colors } }) => css`
    padding-left: ${margins.screenSideMargin};
    padding-right: ${margins.screenSideMargin};
    padding-top: 85px;
    padding-bottom: 30px;
    background-color: ${colors.profileMenuBg};
  `}
`;

export const OptionsContainer = styled.ScrollView`
  margin-top: 20px;
`;
