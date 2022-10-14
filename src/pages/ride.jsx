import React, { useContext } from 'react';

import { CREATE_RIDE } from '../helper_assets/menu-paths';
import { StoreContext } from '../stores/store-context';

function RidePage() {

  const store = useContext(StoreContext);
  store.setCurrentPage(CREATE_RIDE);

  return (
    <div>
      <h1>Create Ride Page</h1>
    </div>
  );
}

//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default RidePage;