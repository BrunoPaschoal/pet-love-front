import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface SexNameProps {
  textColor: string;
  fontSize: string;
}

export const SexName = styled.Text<SexNameProps>`
  ${({ theme: { fonts }, textColor, fontSize }) => css`
    font-family: ${fonts.PoppinsMedium};
    font-size: ${fontSize};
    color: ${textColor};
    margin-left: 3px;
    transform: translateY(3px);
  `}
`;
