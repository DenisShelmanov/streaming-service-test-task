import { StarOutlined } from '@ant-design/icons';

import { Route } from '../common/enums';
import { IModule } from '../common/interfaces';

export const featuredModule: IModule = {
  routes: [],
  menuItems: [
    {
      path: Route.FEATURED,
      label: 'Featured',
      icon: <StarOutlined />,
    },
  ],
};
