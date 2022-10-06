import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";

import RidesList from '../components/RidesList';
import { StoreContext } from '../stores/store-context';
import { DASHBOARD } from '../components/helper_assets/menu-tab-values';

const DashboardPage = () => {

  const store = useContext(StoreContext);  
  store.setCurrentPage(DASHBOARD);

  const [ridesList, setRidesList] = useState([]);

  useEffect(() => {
    const ridesList = async () => {
      try {
        const res = await axios.get("https://random-data-api.com/api/users/random_user?size=3");
        setRidesList(res.data);
      } 
      catch(err) {
        console.log("error: ", err);
      }
    }
    ridesList();
  }, []);

  // const users = ridesList.map(user => <h2>{user.email}</h2>);

  return (
    <div>
      <RidesList ridesList={ridesList} />
    </div>
  );
}
  
//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
export default DashboardPage;
