import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home.tsx'));
const Calendar = lazy(() => import('./pages/Calendar.tsx'));
const CropMap = lazy(() => import('./pages/CropMap.tsx'));
const Notifications = lazy(() => import('./pages/Notifications.tsx'));
const Community = lazy(() => import('./pages/Community.tsx'));
const Advisory = lazy(() => import('./pages/Advisory.tsx'));
const Market = lazy(() => import('./pages/Market.tsx'));
const Settings = lazy(() => import('./pages/Settings.tsx'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'map',
        element: <CropMap />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'advisory',
        element: <Advisory />,
      },
      {
        path: 'market',
        element: <Market />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
