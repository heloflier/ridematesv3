import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'

import RideProfile from '../components/ride/RideProfile';
import { CREATE_RIDE, DASHBOARD, EDIT_RIDE } from '../helpers/assets/menu-paths';
import { StoreContext } from '../stores/store-context';

export const RidePage = (props) => {

  const store = useContext(StoreContext);
  console.log('ridePage - store.currentUserId: ', store.currentUserId);
  const location = useLocation();

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
      <RideProfile createRide={createRide} userId={store.currentUserId} />
    </div>
  );
}
