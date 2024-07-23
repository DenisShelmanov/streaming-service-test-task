import { ReactNode } from 'react';

import { Route } from '../enums';

export interface IMenuItem {
  path: Route;
  label: string;
  icon: ReactNode;
}
