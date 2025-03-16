import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../src/Style/index.css';


import MainlayoutPage from './Layout/Mainlayout';
import AllPage from './Layout/AllPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainlayoutPage />,
    children: [
      {
        path: '/',
        element: <AllPage />, 
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);