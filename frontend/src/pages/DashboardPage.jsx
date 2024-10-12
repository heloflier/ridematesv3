import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import RidesList from '../components/dashboard/RidesList';
import { StoreContext } from '../stores/store-context';
import { DASHBOARD, CREATE_RIDE } from '../helper_assets/menu-paths';

export const DashboardPage = () => {

  const store = useContext(StoreContext);  
  
  useEffect(() => {
    store.setCurrentPage(DASHBOARD);
  }, [store]);
  
  const [ridesList, setRidesList] = useState([]);
  
  useEffect(() => {
    const apiUrl = '/api/ride/all';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((allRides) => {
        setRidesList(allRides)
      })
      .catch((error) => {
        console.error('Dashboard Error:', error);
      });
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <span><h2>Available rides</h2></span>
        <Link to={`/${CREATE_RIDE}`} state={{ createRide: true }}>
          <Button
            size='lg'
            color=''
            className='std-theme'
          >
            Create a new ride!
          </Button>
        </Link>
      </div>
      <RidesList ridesList={ridesList} />
    </div>
  );
}
  
//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
