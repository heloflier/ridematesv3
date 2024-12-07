import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

import { StoreContext } from '../stores/store-context';
import { REGISTER } from '../helpers/assets/menu-paths';

export const RegisterPage = () => {
  console.log('------------------- RegisterPage: ');
  const store = useContext(StoreContext);
  const navigate = useNavigate();
  store.setCurrentPage(REGISTER);

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
        console.log('-------- data: ', data);
        if (data.isLoggedIn) {
          console.log('isLoggedIn: ', data.isLoggedIn);
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [navigate]);

  let existingUser = false;

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('handleRegister **************');

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let email = formData.get('email') as string;
    email = email.toLowerCase();
    const password = formData.get('password') as string;

    const apiUrl = '/api/register';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    };

    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      .then((user) => {
        console.log('----- user: ', user);
        if (user.token) {
          sessionStorage.setItem('ridemates_jwt_token', user.token);
          navigate('/');
        }
        return existingUser = true;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      {existingUser && <span className='text-danger'>User already exists</span>}
      <form onSubmit={handleRegister}>
        <label>
          <p>Email</p>
          <input type='email' name='email' />
        </label>
        <label className='ms-3'>
          <p>Password</p>
          <input type='password' name='password' />
        </label>
        <div className='mt-3'>
          <Button>Submit</Button>
        </div>
      </form>
    </>
  );
};

//   Navbar.propTypes = {
  //     classes: PropTypes.object.isRequired,
//   };
