import { accountModule } from './account';
import { IModule } from './common/interfaces';
import { contactModule } from './contact';
import { featuredModule } from './featured';
import { feedModule } from './feed';
import { searchModule } from './search';
import { settingsModule } from './settings';

const modules = [
  feedModule,
  accountModule,
  featuredModule,
  searchModule,
  settingsModule,
  contactModule,
];
export const appModule: IModule = modules.reduce(
  ({ routes, menuItems }, module) => {
    return {
      routes: [...routes, ...module.routes],
      menuItems: [...menuItems, ...module.menuItems],
    };
  },
  {
    routes: [],
    menuItems: [],
  },
);
