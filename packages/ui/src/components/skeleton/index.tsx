import React from 'react';
import { SkeletonStyled } from './styled';
import { SkeletonVariant } from './types';
import { useTheme } from '@/ui/theme';

export interface SkeletonProps {
  className?: string;
  variant?: SkeletonVariant;
  width?: number;
  height?: number;
  fullWidth?: boolean;
  colors?: [string, string?];
  opacity?: [number, number?];
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant,
  width,
  height,
  fullWidth = false,
  colors,
  opacity
}) => {
  const theme = useTheme();

  return (
    <SkeletonStyled
      $variant={variant}
      $width={width}
      $height={height}
      $fullWidth={fullWidth}
      className={className}
      initial={{
        background: colors?.[0] ?? theme.colors.grayScale.gray5,
        opacity: opacity?.[0] ?? 1
      }}
      animate={{
        background: colors ?? [
          theme.colors.grayScale.gray5,
          theme.colors.grayScale.gray1
        ],
        opacity: opacity ?? [1],
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse'
        }
      }}
    />
  );
};

Skeleton.displayName = 'Skeleton';

export * from './types';