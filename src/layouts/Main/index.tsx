import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
import {
// CHAT_ROUTE,
// LOGIN_ROUTE,
} from '../../router/constants';
import { privateRoutes, publicRoutes } from '../../router/rotutes';
import { IRoutes } from '../../router/interfaces';

const getRoutes = (routes: Array<IRoutes>) => routes.map(({ path, Component }) => (
  <Route path={path} element={<Component />} />
));

const Main: React.FC = () => {
  const isUser = false;
  console.log(isUser);

  return (
    <BrowserRouter>
      {
          isUser ? (
            <Routes>
              {getRoutes(privateRoutes)}
              {/* <Navigate to={LOGIN_ROUTE} /> */}
            </Routes>
          ) : (
            <Routes>
              {getRoutes(publicRoutes)}
              {/* <Navigate to={LOGIN_ROUTE} /> */}
            </Routes>
          )
        }
    </BrowserRouter>
  );
};
export default Main;
