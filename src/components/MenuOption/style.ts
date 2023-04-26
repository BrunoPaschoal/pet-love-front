import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme: { margins } }) => css`
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 50px;
    padding-left: ${margins.screenSideMargin};
    padding-right: ${margins.screenSideMargin};
  `}
`;

export const OptionName = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    color: ${colors.gray_03};
    font-size: ${fontSizes.p2};
    font-family: ${fonts.PoppinsMedium};
    margin-bottom: -3px;
  `}
`;

export const IconContainer = styled.Text`
  ${({ theme: { colors, fontSizes, fonts } }) => css`
    width: 35px;
  `}
`;
