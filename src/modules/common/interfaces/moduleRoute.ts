import { ReactNode } from 'react';

import { Route } from '../enums';

export interface IModuleRoute {
  path: Route;
  element: ReactNode;
}
