import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import { observer } from 'mobx-react-lite';
import { useStores } from '../stores/store-context';
import { authService } from '../services/authService';
import { LOGIN, REGISTER } from '../helpers/assets/menu-paths';

export const LoginPage = observer(() => {
  const store = useStores();
  const navigate = useNavigate();
  store.setCurrentPage(LOGIN);

  useEffect(() => {
    console.log('login page isUserAuth in useEffect_________');
    if (store.authStore.isAuthenticated) {
      console.log('isLoggedIn: true');
      navigate('/');
    }
  }, [store.authStore.isAuthenticated, navigate, store]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('handleLogin **************');
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let email = formData.get('email') as string;
    email = email.toLowerCase();
    const password = formData.get('password') as string;

    store.authStore.setLoading(true);

    try {
      const response = await authService.login(email, password);
      console.log('----- login request: ', response);
      
      if (response.token && response.id) {
        store.authStore.setAuthState(response.token, response.id);
        console.log('store.currentUserId: ', store.currentUserId);
        console.log('response.id: ', response.id);
        store.setCurrentUserId(response.id);
        console.log('new store.currentUserId: ', store.currentUserId);
        navigate('/');
      } else {
        store.authStore.setError(response.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      store.authStore.setError('Login failed');
    } finally {
      store.authStore.setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        <p>Email</p>
        <input 
          type='email' 
          name='email' 
          disabled={store.authStore.isLoading}
        />
      </label>
      <label className='ms-3'>
        <p>Password</p>
        <input 
          type='password' 
          name='password'
          disabled={store.authStore.isLoading}
        />
      </label>
      {store.authStore.error && (
        <div className="text-danger mt-2">
          {store.authStore.error}
        </div>
      )}
      <Link to={`/${REGISTER}`} state={{ registerUser: true }}>
        <span className='ms-3'>Register</span>
      </Link>
      <div>
        <Button 
          className='mt-3'
          disabled={store.authStore.isLoading}
        >
          {store.authStore.isLoading ? 'Logging in...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
});
