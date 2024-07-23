import { Modal } from 'antd';
import { useState } from 'react';

import { Button, Text } from '../../../common/components';
import { TextAlignment, TextSize } from '../../../common/components/Text';
import './index.css';
import { Breakpoint } from '../../../common/enums';
import { useDimension } from '../../../common/hooks';

interface IProps {
  isMobileVersion?: boolean;
}

export const HeroSectionContent = ({ isMobileVersion = false }: IProps) => {
  const { width } = useDimension();
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <div
      className={
        isMobileVersion
          ? 'hero-section-content-mobile'
          : 'hero-section-content-mobile'
      }
    >
      <Text
        size={width > Breakpoint.LARGE ? TextSize.LARGE : TextSize.DEFAULT}
        alignment={isMobileVersion ? TextAlignment.CENTER : TextAlignment.LEFT}
      >
        This is long sample text that can be written as a title for hero section
        at the main page
      </Text>
      <div className={isMobileVersion ? 'mobile-button' : 'button'}>
        <Button
          onClick={() => setIsModalOpened(true)}
          title="Get started"
          size={isMobileVersion ? 'middle' : 'large'}
          width={width > Breakpoint.LARGE ? 200 : 100}
          alignment={
            isMobileVersion ? TextAlignment.CENTER : TextAlignment.LEFT
          }
        />
      </div>
      <Modal
        open={isModalOpened}
        onOk={() => {
          console.log(123);
        }}
        onCancel={() => {
          123;
        }}
        onClose={() => {
          console.log(123);
        }}
      >
        123
      </Modal>
    </div>
  );
};
