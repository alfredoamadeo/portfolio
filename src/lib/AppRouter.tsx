import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { PortfolioApp } from '../components/PortfolioApp';
import { MaintenancePage } from '../components/MaintenancePage';
import { PortfolioPaths } from '../types/paths';

const router = createBrowserRouter([
  {
    path: PortfolioPaths.ROOT,
    element: <PortfolioApp />,
    children: [
      {
        index: true,
        element: <Navigate to={PortfolioPaths.ABOUT} replace />,
      },
      {
        path: PortfolioPaths.ABOUT,
        element: null,
      },
      {
        path: PortfolioPaths.EXPERIENCE,
        element: null, 
      },
      {
        path: PortfolioPaths.PORTFOLIO,
        element: null, 
      },
      {
        path: PortfolioPaths.CONTACT,
        element: null, 
      },
      {
        path: '*',
        element: <Navigate to={PortfolioPaths.ABOUT} replace />,
      },
    ],
  },
  {
    path: PortfolioPaths.MAINTENANCE,
    element: <MaintenancePage />,
  }
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
