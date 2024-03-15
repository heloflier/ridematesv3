import React, { Fragment } from 'react';
import { CardGroup } from 'reactstrap';

import RidesListItem from './RidesListItem';

const RidesList = ({ridesList = []}) => { 
  
  const rides = ridesList.map(( rideInfo, index) => (
    <RidesListItem rideInfo={rideInfo}  key={index} />
  ));

  return (
    <Fragment>
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