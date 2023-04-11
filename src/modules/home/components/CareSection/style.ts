import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme: { margins } }) => css`
    margin-top: 25px;
    padding-left: ${margins.screenSideMargin};
    padding-right: ${margins.screenSideMargin};
  `}
`;

export const CareSectionHeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -3px;
`;

export const Title = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    color: ${colors.tertiary};
    font-family: ${fonts.PoppinsSemiBold};
    font-size: ${fontSizes.heading_h3};
  `}
`;

export const SeeItAllContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const SeeItAllButton = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    margin-right: 3px;
    color: ${colors.secondary};
    font-family: ${fonts.PoppinsMedium};
    font-size: ${fontSizes.p5};
  `}
`;

export const CareSectionDescription = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    color: ${colors.gray_04};
    font-family: ${fonts.PoppinsMedium};
    font-size: ${fontSizes.p5};
  `}
`;

export const CardsContainer = styled.View`
  margin-top: 15px;
`;
