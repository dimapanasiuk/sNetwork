import React from 'react';
import { Route } from 'react-router-dom';
import { IRoutes } from './interfaces';

const getRoutes = (routes: Array<IRoutes>) => routes.map(({ path, Component }) => (
  <Route path={path} element={<Component />} />
));

export default getRoutes;
