// import './sass/main.scss';
import './css/main.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  DASHBOARD,
  CREATE_RIDE,
  EDIT_RIDE,
  LOGIN,
  PROFILE,
  USER_RIDES
} from './helper_assets/menu-paths';

import { Navigation } from './components/Nav/Navigation';
import { UserProfilePage } from './pages/UserProfilePage';
import { RidePage } from './pages/RidePage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { UserRidesPage } from './pages/UserRidesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path={DASHBOARD} element={<DashboardPage />} />
          <Route path={`/${LOGIN}`} element={<LoginPage />} />
          <Route path={`/${PROFILE}`} element={<UserProfilePage />} />
          <Route path={`/${USER_RIDES}`} element={<UserRidesPage />} />
          <Route path='*' element={<h1>There's nothing here: 404!</h1>} />
          <Route path={`/${CREATE_RIDE}`} element={<RidePage createRide />} />
          <Route path={`/${EDIT_RIDE}`} element={<RidePage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
