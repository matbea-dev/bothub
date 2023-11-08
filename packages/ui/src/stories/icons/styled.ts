import { styled } from 'styled-components';
import { Typography } from '@/ui/components/typography';

export const IconsStyled = styled.div`
  padding: 20px;
`;

export const IconsTitle = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts.ibmPlexSans.semiBold};
  font-size: 22px;
`;

export const IconList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 24px;
  background: #181F2F;
  border-radius: 8px;
  padding: 24px;
  gap: 20px;
  max-width: 800px;
`;