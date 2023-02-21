import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { Button, NavLink } from 'reactstrap';

import RidesList from '../components/RidesList';
import { StoreContext } from '../stores/store-context';
import { DASHBOARD, CREATE_RIDE } from '../helper_assets/menu-paths';

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
      <div className='d-flex justify-content-end'>
        <NavLink href={`/${CREATE_RIDE}`}>
          <Button
            size='lg'
            color=''
            className='std-theme'
            onClick={()=> console.log('clicked enter new ride')}
            >
            Create a new ride!
          </Button>
        </NavLink>
      </div>
      <RidesList ridesList={ridesList} />
    </div>
  );
}
  
//   Navbar.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
  
export default DashboardPage;
