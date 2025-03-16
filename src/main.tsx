import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../src/Style/index.css';

import HomePage from './Layout/HomePage';
import MainlayoutPage from './Layout/Mainlayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainlayoutPage />,
    children: [
      {
        path: '/',
        element: <HomePage />, 
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);