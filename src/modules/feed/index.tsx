import { ProductOutlined } from '@ant-design/icons';

import { FeedPage } from './pages';

import { Route } from '../common/enums';
import { IModule } from '../common/interfaces';

export const feedModule: IModule = {
  routes: [
    {
      path: Route.FEED,
      element: <FeedPage />,
    },
  ],
  menuItems: [
    {
      path: Route.FEED,
      label: 'Feed',
      icon: <ProductOutlined />,
    },
  ],
};
