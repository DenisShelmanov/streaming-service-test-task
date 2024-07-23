import { Menu as AntdMenu, MenuProps } from 'antd';

import { appModule } from '../../..';
import './index.css';
import { Route } from '../../enums';

type MenuItem = Required<MenuProps>['items'][number];

export const Menu = () => {
  const menuItems: MenuItem[] = appModule.menuItems.map(
    ({ label, path, icon }) => {
      return {
        label,
        icon: <div className="icon">{icon}</div>,
        key: path,
      };
    },
  );

  return (
    <AntdMenu
      mode="inline"
      theme="dark"
      items={menuItems}
      className="item"
      defaultActiveFirst={true}
      defaultSelectedKeys={[Route.FEED]}
    />
  );
};
