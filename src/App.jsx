// import './sass/main.scss';
import './css/main.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navigation from './components/Nav/Navigation';
import ProfilePage from './pages/profile';
import RidePage from './pages/ride';
import DashboardPage from './pages/dashboard';

class App extends Component {
  render() {

    return (
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/ride" element={<RidePage />} />
        </Routes>
      </Router>
    )
  };
}

export default App;
