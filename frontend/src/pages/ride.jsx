import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom'

import RideProfile from '../components/ride/RideProfile';
import { RIDE } from '../helper_assets/menu-paths';
import { StoreContext } from '../stores/store-context';

function RidePage(props) {

  const location = useLocation()
  const { createRide } = location.state

  const store = useContext(StoreContext);
  store.setCurrentPage(RIDE);

  return (
    <div>
      <RideProfile createRide={createRide} />
    </div>
  );
}

export default RidePage;