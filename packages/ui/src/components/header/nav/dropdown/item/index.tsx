import React, { useCallback } from 'react';
import {
  HeaderNavDropdownInfo, 
  HeaderNavDropdownItemContent, 
  HeaderNavDropdownItemStyled, 
  HeaderNavDropdownText, 
  HeaderNavDropdownTitle 
} from './styled';
import { useHeaderNavDropdown } from '../context';

export interface HeaderNavDropdownItemProps extends Omit<React.ComponentProps<typeof HeaderNavDropdownItemStyled>, 'title'> {
  icon: React.ReactNode;
  title: string;
  text: string;
  as?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  to?: string;
}

export const HeaderNavDropdownItem: React.FC<HeaderNavDropdownItemProps> = ({ 
  icon, title, text, as, to, ...props
}) => {
  const { setIsOpen } = useHeaderNavDropdown();

  const handleClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    props.onClick?.(event);
    setIsOpen(false);
  }, [props.onClick]);

  return (
    <HeaderNavDropdownItemStyled 
      {...props} 
      as={as} 
      to={to}
      onClick={handleClick}
    >
      <HeaderNavDropdownItemContent
        initial={{
          transform: 'scale(1)',
          background: 'rgba(255, 255, 255, 0)'
        }}
        whileHover={{
          background: 'rgba(255, 255, 255, 0.045)'
        }}
        whileTap={{
          transform: 'scale(0.95)'
        }}
      >
        {icon}
        <HeaderNavDropdownInfo>
          <HeaderNavDropdownTitle>{title}</HeaderNavDropdownTitle>
          <HeaderNavDropdownText>{text}</HeaderNavDropdownText>
        </HeaderNavDropdownInfo>
      </HeaderNavDropdownItemContent>
    </HeaderNavDropdownItemStyled>
  );
};
