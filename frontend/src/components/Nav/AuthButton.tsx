import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthButton = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const apiUrl = '/api/isUserAuth';
    const options = {
      method: 'GET',
      headers: {
        Authorization: sessionStorage.getItem('ridemates_jwt_token') || ''
      }
    };

    console.log('--------- options: ', options);
    fetch(apiUrl, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.isLoggedIn) {
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [isLoggedIn]);

  async function handleLogout() {
    sessionStorage.removeItem('ridemates_jwt_token');
    navigate('/login');
  };
  
  return (
    <div>
      {isLoggedIn ? (
        <span onClick={handleLogout}>Logout</span>
      ) : (
        <span onClick={() => navigate('/login')}>Login / Register</span>
      )}
    </div>
  );
};
