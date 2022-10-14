import React, { useContext } from 'react';

import UserProfile from '../components/UserProfile';
import { PROFILE } from '../helper_assets/menu-paths';

import { StoreContext } from '../stores/store-context';

function ProfilePage() { 

  const store = useContext(StoreContext);  
  store.setCurrentPage(PROFILE);

  return (
    <div>
      <UserProfile />
    </div>
  );
}
  
//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
  export default ProfilePage;