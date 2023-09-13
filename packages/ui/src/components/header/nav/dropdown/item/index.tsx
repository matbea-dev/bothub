import React, { useCallback } from 'react';
import {
  HeaderNavDropdownInfo, HeaderNavDropdownItemStyled, HeaderNavDropdownText, HeaderNavDropdownTitle 
} from './styled';
import { useHeaderNavDropdown } from '../context';

export interface HeaderNavDropdownItemProps extends Omit<React.ComponentProps<typeof HeaderNavDropdownItemStyled>, 'title'> {
  icon: React.ReactNode;
  title: string;
  text: string;
  as?: any;
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
    <HeaderNavDropdownItemStyled {...props} as={as} to={to} onClick={handleClick}>
      {icon}
      <HeaderNavDropdownInfo>
        <HeaderNavDropdownTitle>{title}</HeaderNavDropdownTitle>
        <HeaderNavDropdownText>{text}</HeaderNavDropdownText>
      </HeaderNavDropdownInfo>
    </HeaderNavDropdownItemStyled>
  );
};
