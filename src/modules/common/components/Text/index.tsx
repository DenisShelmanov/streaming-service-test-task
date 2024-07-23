import { ReactNode } from 'react';

export enum TextSize {
  DEFAULT = '24px',
  LARGE = '48px',
  SMALL = '18px',
  EXTRA_SMALL = '12px',
}

export enum TextColor {
  WHITE = '#FFFFFF',
  BLACK = '#000000',
}

export enum TextAlignment {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
}

interface IProps {
  children: ReactNode;
  size?: TextSize;
  color?: TextColor;
  alignment?: TextAlignment;
}
export const Text = ({
  children,
  size = TextSize.DEFAULT,
  color = TextColor.WHITE,
  alignment = TextAlignment.LEFT,
}: IProps) => {
  return (
    <div style={{ fontSize: size, color, textAlign: alignment }}>
      {children}
    </div>
  );
};
