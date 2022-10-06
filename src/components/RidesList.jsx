import React, { Fragment } from 'react';
import { CardGroup } from 'reactstrap';

import Ride from './Ride';

const RidesList = ({ridesList = []}) => { 
  
  const rides = ridesList.map( rideInfo => (
        <Ride rideInfo={rideInfo}  key={rideInfo.id} />
  ));

  return (
    <Fragment>
      <h2>Available rides</h2>
      <CardGroup>
        { rides };
      </CardGroup>
    </Fragment>
  );
}
  
//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
  export default RidesList;