import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../src/Style/index.css';
import MainlayoutPage from './Layout/Mainlayout';
import AllPage from './Layout/AllPage';
import Poster from './components/HomePage/Poster';
import GarmentsTags from './components/HomePage/GarmentsTags';
import Files from './components/HomePage/Files';
import Envelopes from './components/HomePage/Envelopes';
import DigitalPapperPRinting from './components/HomePage/DigitalPapperPRinting';
import Stickers from './components/HomePage/Stickers';
import Pens from './components/HomePage/Pens';
import SampleFiles from './components/HomePage/SampleFiles';
import ShootingTargets from './components/HomePage/ShootingTargets';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainlayoutPage />,
    children: [
      {
        path: '/',
        element: <AllPage />, 
      },
      {
        path: '/posters',
        element: <Poster />,

      },
      {
        path: '/garments-tags',
        element: <GarmentsTags />,
      },
      {
        path: '/files',
        element: <Files />,
      },
      {
        path: '/envelopes',
        element: <Envelopes />,
      },
      {
        path: '/digital-paper-printing',
        element: <DigitalPapperPRinting />,
      },
      {
        path: '/stickers-labels',
        element: <Stickers />,
      },
      {
        path: '/pens',
        element: <Pens />,
      },
       {
        path: '/simple-file',
        element:<SampleFiles />,
       }, 
       {
        path:'/shooting-targets',
        element:<ShootingTargets />,
       },

    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);