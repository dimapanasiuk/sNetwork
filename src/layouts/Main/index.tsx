import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom';
// import Chat from '../../pages/Chat/Chat';
import {
// CHAT_ROUTE,
  LOGIN_ROUTE,
} from '../../router/constants';
import {
  // privateRoutes,
  publicRoutes,
  // publicRoutes,
} from '../../router/rotutes';
// import { IRoutes } from '../../router/interfaces';
import Login from '../../pages/Login/Login';
// import Chat from '../../pages/Chat/Chat';

// const getRoutes = (routes: Array<IRoutes>) => routes.map(({ path, Component }) => (
//   <Route path={path} element={<Component />} />
// ));

const Main: React.FC = () => {
  const isUser = false;
  console.log(isUser);
  // console.log(getRoutes(privateRoutes));
  // getRoutes(publicRoutes);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOGIN_ROUTE} element={<Login />} />
        {/* {getRoutes(privateRoutes)} */}

        {publicRoutes.map(({ path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
        {/* <Route index element={<h1>2</h1>} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default Main;
