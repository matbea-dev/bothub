import { css, styled } from 'styled-components';
import { Typography, TypographyProps } from '../typography';
import { Button } from '../button';
import bg from './assets/bg.svg';
import mainBg from './assets/main-bg.webp';
import { DescriptionCardVariant } from './types';

export interface DescriptionCardBorderWrapperProps {
  $variant: DescriptionCardVariant;
}

export const DescriptionCardBorderWrapper = styled.div<DescriptionCardBorderWrapperProps>`
  padding: 1px;
  border-radius: 12px;
  height: 100%;
  width: 100%;
  ${({ $variant }) => {
    switch ($variant) {
      case 'tertiary':
        return css`
          background: radial-gradient(50% 100% at 150px -10%, ${({ theme }) => theme.colors.accent.primary}, rgba(0, 0, 0, 0.0));
        `;
      default:
        return css``;
    }
  }}
`;

export interface DescriptionCardBackgroundWrapperProps {
  $variant: DescriptionCardVariant;
}

export const DescriptionCardBackgroundWrapper = styled.div<DescriptionCardBackgroundWrapperProps>`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const DescriptionCardContent = styled.div<{ $variant: DescriptionCardVariant }>`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  ${({ $variant }) => {
    switch ($variant) {
      case 'tertiary':
        return css`
          display: flex; 
          flex-direction: column;
          align-items: flex-start;
          padding: 24px 20px;
          @media (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
            padding: 24px 18px;
          }
          @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
            padding: 24px 14px;
          }
        `;
      default:
        return css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 47px 25px;
          @media (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
            align-items: center;
          }
          @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
            padding: 26px 10px;
          }
        `;
    }
  }}
`;

export const DescriptionCardBackground = styled.div<{ $variant: DescriptionCardVariant }>`
  position: absolute;
  width: 100%;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  pointer-events: none;
  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'tertiary':
        return css`
          background-color: ${theme.colors.grayScale.gray4};
        `;
      default:
        return css`
          background-image: url(${JSON.stringify(bg)});
          background-position-y: bottom;
          background-repeat: no-repeat;
        `;
    }
  }}
`;

export interface DescriptionCardTitleProps extends TypographyProps {
  $variant: DescriptionCardVariant;
}

export const DescriptionCardTitle = styled(Typography).attrs({ variant: 'body-xl-semibold' })`
  @media (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    text-align: center;
  }
`;

export const DescriptionCardTertiaryTitle = styled(Typography).attrs({ variant: 'body-m-semibold' })`
  margin-top: 16px;
  @media (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    margin-top: 14px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
    margin-top: 10px;
  }
`;

export const DescriptionCardText = styled(Typography).attrs({ variant: 'body-m-regular', component: 'p' })`
  margin-top: 16px;
  @media (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    text-align: center;
  }
`;

export const DescriptionCardTertiaryText = styled(Typography).attrs({ variant: 'body-m-regular', component: 'p' })`
  margin-top: 12px;
`;

export const DescriptionCardButton = styled(Button)`
  margin-top: 20px;
  @media (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    display: block;
    margin: auto;
    margin-top: 14px;
    margin-bottom: 0px;
  }
`;

export const DescriptionCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media (max-width: ${({ theme }) => theme.tablet.maxWidth}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const DescriptionCardStyled = styled.div<{ $variant: DescriptionCardVariant }>`
  display: flex;
  width: 100%;
  min-height: 244px;
  max-width: 630px;
  ${({ $variant }) => $variant === 'main' && css`
    height: 532px;
    @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
      height: 380px;
    }
    ${DescriptionCardContent} {
      align-items: center;
      > ${DescriptionCardTitle} {
        text-align: center;
      }
      > ${DescriptionCardText} {
        text-align: center;
      }
      > ${DescriptionCardButton} {
        display: block;
        margin: auto;
        margin-top: 20px;
      }
    }
    ${DescriptionCardBackground} {
      background-image: url(${JSON.stringify(mainBg)});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
    }
  `}
  ${({ $variant }) => $variant === 'secondary' && css`
    @media (max-width: ${({ theme }) => theme.mobile.maxWidth}) {
      min-height: auto;
      height: auto;
      ${DescriptionCardBackground} {
        background-size: cover;
      }
    }
  `}
  ${({ theme, $variant }) => $variant === 'tertiary' && css`
    max-width: 300px;
    @media (max-width: ${theme.tablet.maxWidth}) {
      max-width: 365px;
    }
  `}
`;
