import { SearchOutlined } from '@ant-design/icons';

import { Route } from '../common/enums';
import { IModule } from '../common/interfaces';

export const searchModule: IModule = {
  routes: [],
  menuItems: [
    {
      path: Route.SEARCH,
      label: 'Search',
      icon: <SearchOutlined />,
    },
  ],
};
