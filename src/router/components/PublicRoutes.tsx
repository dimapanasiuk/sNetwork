import React from 'react';
import { Routes, Navigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../router/constants';
import { publicRoutes } from '../../router/rotutes';

import getRoutes from '../utils';

const PublicRoutes: React.FC = () => (
  <>
    <Routes>
      {getRoutes(publicRoutes)}
    </Routes>
    <Navigate to={LOGIN_ROUTE} />
  </>
);

export default PublicRoutes;
