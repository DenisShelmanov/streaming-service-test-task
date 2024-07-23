import { SettingOutlined } from '@ant-design/icons';

import { Route } from '../common/enums';
import { IModule } from '../common/interfaces';

export const settingsModule: IModule = {
  routes: [],
  menuItems: [
    {
      path: Route.SETTINGS,
      label: 'Settings',
      icon: <SettingOutlined />,
    },
  ],
};
