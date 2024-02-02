// import './sass/main.scss';
import './css/main.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  DASHBOARD,
  PROFILE,
  RIDE,
  USER_RIDES
} from './helper_assets/menu-paths';

import Navigation from './components/Nav/Navigation';
import ProfilePage from './pages/profile';
import RidePage from './pages/ride';
import DashboardPage from './pages/dashboard';
import UserRidesPage from './pages/userRides';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path={DASHBOARD} element={<DashboardPage />} />
          <Route path={`/${PROFILE}`} element={<ProfilePage />} />
          <Route path={`/${RIDE}`} element={<RidePage />} />
          <Route path={`/${USER_RIDES}`} element={<UserRidesPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
