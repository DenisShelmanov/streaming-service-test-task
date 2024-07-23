import { Space } from 'antd';

import './index.css';
import { Breakpoint } from '../../../common/enums';
import { useDimension } from '../../../common/hooks';
import { HeroSectionContent } from '../HeroSectionContent';

export const HeroSection = () => {
  const { width } = useDimension();
  const isMobileVersion = width <= Breakpoint.SMALL;

  return (
    <>
      <Space
        className={`hero-banner ${isMobileVersion ? 'small-hero-banner' : 'big-hero-banner'}`}
      >
        <HeroSectionContent isMobileVersion={isMobileVersion} />
      </Space>
    </>
  );
};
