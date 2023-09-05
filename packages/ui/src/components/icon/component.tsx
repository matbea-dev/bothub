import React from 'react';
import { IconProps } from '.';

export type IconComponent = React.FC<IconProps> & {
  bothubElType?: 'icon';
};

export function icon(component: IconComponent): IconComponent {
  component.bothubElType = 'icon';

  return component;
}

// eslint-disable-next-line
export function isIconComponent(component: any): boolean {
  return typeof component === 'function' && component.bothubElType === 'icon';
}
