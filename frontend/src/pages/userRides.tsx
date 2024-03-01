import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import RidesList from '../components/dashboard/RidesList';
import { USER_RIDES, CREATE_RIDE } from '../helper_assets/menu-paths';
import { StoreContext } from '../stores/store-context';

function UserRidesPage() {
  const store = useContext(StoreContext);
  store.setCurrentPage(USER_RIDES);

  const userId = '64275075798a59db3b803cba';

  const [ridesList, setRidesList] = useState([]);

  useEffect(() => {
    const apiUrl = `/api/ride/allByUser/${userId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((userRides) => {
        setRidesList(userRides);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <span>
          <h2>My Rides</h2>
        </span>
        <Link to={`/${CREATE_RIDE}`} state={{ createRide: true }}>
          <Button size='lg' color='' className='std-theme'>
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

export default UserRidesPage;
