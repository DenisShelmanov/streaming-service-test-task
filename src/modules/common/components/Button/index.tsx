import { Button as AntdButton } from 'antd';
import { ButtonType } from 'antd/es/button';
import { SizeType } from 'antd/es/config-provider/SizeContext';

import { Text, TextSize } from '../Text';

export enum ButtonSize {
  DEFAULT,
  LARGE,
}

interface IProps {
  title: string;
  type?: ButtonType;
  width?: number | string;
  height?: number;
  size?: SizeType;
  alignment?: 'center' | 'left';
  onClick?: () => void;
}

export const Button = ({
  title,
  width,
  height,
  type = 'primary',
  size = 'middle',
  alignment = 'center',
  onClick,
}: IProps) => {
  return (
    <AntdButton
      type={type}
      style={{ width, height, alignItems: alignment }}
      size={size}
      onClick={onClick}
    >
      <Text size={TextSize.SMALL}>{title}</Text>
    </AntdButton>
  );
};
