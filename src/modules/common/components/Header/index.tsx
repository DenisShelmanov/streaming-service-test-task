import { MenuOutlined } from '@ant-design/icons';
import './index.css';
import { Drawer } from 'antd';
import { useState } from 'react';

import { Menu } from '../Menu';

export const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <MenuOutlined className="menu" onClick={() => setIsOpened(true)} />
      <Drawer
        open={isOpened}
        onClose={() => setIsOpened(false)}
        placement="left"
        className="drawer"
      >
        <Menu />
      </Drawer>
    </>
  );
};
