import React, { useContext } from 'react';

import { RIDE } from '../helper_assets/menu-paths';
import { StoreContext } from '../stores/store-context';

function RidePage() {

  const store = useContext(StoreContext);
  store.setCurrentPage(RIDE);

  return (
    <div>
      <h1>Ride Page</h1>
    </div>
  );
}

//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default RidePage;