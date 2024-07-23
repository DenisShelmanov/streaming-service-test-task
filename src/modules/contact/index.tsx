import { ContactsOutlined } from '@ant-design/icons';

import { Route } from '../common/enums';
import { IModule } from '../common/interfaces';

export const contactModule: IModule = {
  routes: [],
  menuItems: [
    {
      path: Route.CONTACTS,
      label: 'Contacts',
      icon: <ContactsOutlined />,
    },
  ],
};
