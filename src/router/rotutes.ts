import Chat from '../pages/Chat/Chat';
import Login from '../pages/Login/Login';
import { LOGIN_ROUTE } from './constants';
import { IRoutes } from './interfaces';

export const publicRoutes:Array<IRoutes> = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes:Array<IRoutes> = [
  {
    path: LOGIN_ROUTE,
    Component: Chat,
  },
];
