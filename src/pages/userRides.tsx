import React, { useContext } from 'react';

import { USER_RIDES } from '../helper_assets/menu-paths';
import { StoreContext } from '../stores/store-context';

function UserRidelistPage() {

  const store = useContext(StoreContext);
  store.setCurrentPage(USER_RIDES);

  return (
    <div>
      <h1>
        User Rides Page</h1>
    </div>
  );
}

//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default UserRidelistPage;