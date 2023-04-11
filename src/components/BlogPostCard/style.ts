import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme: { colors } }) => css`
    flex-direction: row;
    background-color: ${colors.white};
    height: 140px;
    border-radius: 15px;
    margin-bottom: 10px;
    padding: 20px;
  `}
`;

export const Image = styled.Image`
  ${({ theme: { colors } }) => css`
    border-radius: 15px;
    width: 45%;
    height: 100%;
  `}
`;

export const TextContainer = styled.View`
  ${({ theme: { colors } }) => css`
    padding: 10px;
    flex: 1;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    margin-bottom: -3px;
    font-family: ${fonts.PoppinsSemiBold};
    font-size: ${fontSizes.p3};
    color: ${colors.gray_05};
  `}
`;

export const Description = styled.Text`
  ${({ theme: { colors, fonts, fontSizes } }) => css`
    font-family: ${fonts.PoppinsRegular};
    font-size: ${fontSizes.p4};
    color: ${colors.gray_05};
  `}
`;
