import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  RouterProvider,
} from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './index.css'
import { router } from './router/Router';
import AuthProvider from './provider/AuthProvider';
 
 
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
  <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </HelmetProvider>
  </React.StrictMode>,
)
