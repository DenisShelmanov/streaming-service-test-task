import { IMenuItem } from './menuItem';
import { IModuleRoute } from './moduleRoute';

export interface IModule {
  routes: IModuleRoute[];
  menuItems: IMenuItem[];
}
