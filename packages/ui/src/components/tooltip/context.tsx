import React, { useContext } from 'react';

export interface TooltipContextValue {
  handleTooltipMouseEnter: React.MouseEventHandler<Element>;
  handleTooltipMouseLeave: React.MouseEventHandler<Element>;
  handleTooltipMouseUp: React.MouseEventHandler<Element>;
  handleTooltipMouseDown: React.MouseEventHandler<Element>;
}

export const TooltipContext = React.createContext<TooltipContextValue>({
  handleTooltipMouseEnter: () => {},
  handleTooltipMouseLeave: () => {},
  handleTooltipMouseUp: () => {},
  handleTooltipMouseDown: () => {}
});

export const TooltipProvider: React.FC<TooltipContextValue & React.PropsWithChildren
> = ({
  children,
  ...value
}) => (
  <TooltipContext.Provider value={value}>
    {children}
  </TooltipContext.Provider>
);

export const TooltipConsumer = TooltipContext.Consumer;

export const useTooltip = () => useContext(TooltipContext);
