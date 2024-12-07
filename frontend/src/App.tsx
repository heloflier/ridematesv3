import './css/main.css';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from './stores/use-stores';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import {
  DASHBOARD,
  CREATE_RIDE,
  EDIT_RIDE,
  LOGIN,
  REGISTER,
  PROFILE,
  USER_RIDES
} from './helpers/assets/menu-paths';

import { Navigation } from './components/Nav/Navigation';
import { UserProfilePage } from './pages/UserProfilePage';
import { RidePage } from './pages/RidePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { UserRidesPage } from './pages/UserRidesPage';

// Define route configuration
interface RouteConfig {
  path: string;
  element: React.ReactNode;
  protected?: boolean;
}

const ProtectedRoute = observer(({ children }: { children: React.ReactNode }) => {
  const { authStore } = useStores();
  
  if (!authStore.isAuthenticated) {
    return <Navigate to={`/${LOGIN}`} replace />;
  }

  return <>{children}</>;
});

const routes: RouteConfig[] = [
  // Public routes
  { path: `/${LOGIN}`, element: <LoginPage /> },
  { path: `/${REGISTER}`, element: <RegisterPage /> },
  
  // Protected routes
  { path: DASHBOARD, element: <DashboardPage />, protected: true },
  { path: `/${PROFILE}`, element: <UserProfilePage />, protected: true },
  { path: `/${USER_RIDES}`, element: <UserRidesPage />, protected: true },
  { path: `/${CREATE_RIDE}`, element: <RidePage createRide />, protected: true },
  { path: `/${EDIT_RIDE}`, element: <RidePage />, protected: true },
  
  // 404 route
  { path: '*', element: <h1>There's nothing here: 404!</h1> }
];

const App = () => {
  const renderRoute = ({ path, element, protected: isProtected }: RouteConfig) => (
    <Route
      key={path}
      path={path}
      element={isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element}
    />
  );

  return (
    <Router>
      <Navigation />
      <Routes>
        {routes.map(renderRoute)}
      </Routes>
    </Router>
  );
};

export default App;
