// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const AuthButton = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     console.log('isUserAuth in login / register AuthButton useEffect_________');
//     const apiUrl = '/api/isUserAuth';
//     const options = {
//       method: 'GET',
//       headers: {
//         Authorization: sessionStorage.getItem('ridemates_jwt_token') || ''
//       }
//     };

//     console.log('--------- AuthButton options: ', options);
//     fetch(apiUrl, options)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.isLoggedIn) {
//           setIsLoggedIn(true);
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }, [isLoggedIn]);

//   async function handleLogout() {
//     sessionStorage.removeItem('ridemates_jwt_token');
//     navigate('/login');
//   };
  
//   return (
//     <div>
//       {isLoggedIn ? (
//         <span onClick={handleLogout}>Logout</span>
//       ) : (
//         <span onClick={() => navigate('/login')}>Login / Register</span>
//       )}
//     </div>
//   );
// };


// src/components/Nav/AuthButton.tsx
import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores/store-context';
import { Button } from 'reactstrap';

export const AuthButton = observer(() => {
  const { authStore } = useStores();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (authStore.isAuthenticated) {
      authStore.logout();
      // If you need navigation after logout, you can add it here
      window.location.href = '/login';
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <Button 
      color="link" 
      className="nav-link text-white" 
      onClick={handleClick}
    >
      {authStore.isAuthenticated ? 'Logout' : 'Login'}
    </Button>
  );
});

