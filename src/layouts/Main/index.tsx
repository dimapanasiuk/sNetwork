import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from '../../router/components/PublicRoutes';
import PrivateRoutes from '../../router/components/PrivateRoutes';

const Main: React.FC = () => {
  const isUser = false;

  return (
    <BrowserRouter>
      {isUser ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};
export default Main;
