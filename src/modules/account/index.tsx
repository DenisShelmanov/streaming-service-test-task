import { UserOutlined } from '@ant-design/icons';

import { Route } from '../common/enums';
import { IModule } from '../common/interfaces';

export const accountModule: IModule = {
  routes: [],
  menuItems: [
    {
      path: Route.ACCOUNT,
      label: 'Account',
      icon: <UserOutlined />,
    },
  ],
};
