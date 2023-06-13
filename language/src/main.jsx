import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  RouterProvider,
} from "react-router-dom";
import { 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {   HelmetProvider } from 'react-helmet-async';

import './index.css'
import { router } from './router/Router';
import AuthProvider from './provider/AuthProvider';
 
const queryClient = new QueryClient()
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  <AuthProvider>
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
    </QueryClientProvider>
   </HelmetProvider>
    </AuthProvider>
  
  </React.StrictMode>,
)
