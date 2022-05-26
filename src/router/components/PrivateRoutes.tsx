import React from 'react';
import { Routes, Navigate } from 'react-router-dom';
import { CHAT_ROUTE } from '../../router/constants';
import { privateRoutes } from '../../router/rotutes';
import getRoutes from '../utils';

const PrivateRoutes: React.FC = () => (
  <>
    <Routes>
      {getRoutes(privateRoutes)}
    </Routes>
    <Navigate to={CHAT_ROUTE} />
  </>
);

export default PrivateRoutes;
