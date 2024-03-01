import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'

import RideProfile from '../components/ride/RideProfile';
import { CREATE_RIDE, DASHBOARD, EDIT_RIDE } from '../helper_assets/menu-paths';
import { StoreContext } from '../stores/store-context';

function RidePage(props) {

  const store = useContext(StoreContext);
  const location = useLocation()

  let createRide = false;
  if (location.pathname === "/create-ride") {
    store.setCurrentPage(CREATE_RIDE);
    createRide = true;
  }
  else if (location.pathname === "/edit-ride") {
    store.setCurrentPage(EDIT_RIDE);
  // }
  // else {
  //   store.setCurrentPage(DASHBOARD);
  };

  return (
    <div>
      <RideProfile createRide={createRide} />
    </div>
  );
}

export default RidePage;