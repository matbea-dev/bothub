import React from 'react';
import { BadgeStyled, BadgeText } from './styled';
import { IconProvider } from '@/ui/components/icon';
import { useTheme } from '@/ui/theme';
import { BadgeVariant } from './types';

export interface BadgeProps extends React.ComponentProps<'span'> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'info', icon, children, ...props
}) => {
  const theme = useTheme();

  let iconFill: string;
  switch (variant) {
    case 'info':
      iconFill = theme.colors.base.white;
      break;
    default:
      iconFill = theme.default.colors.base.white;
      break;
  }

  return (
    <BadgeStyled
      $variant={variant} 
      {...props}
    >
      <IconProvider
        size={12}
        fill={iconFill}
      >
        {icon}
      </IconProvider>
      {typeof children !== 'string' && children}
      {typeof children === 'string' && (
        <BadgeText
          $variant={variant}
        >
          {children}
        </BadgeText>
      )}
    </BadgeStyled>
  );
};

export * from './types';
export * from './styled';
