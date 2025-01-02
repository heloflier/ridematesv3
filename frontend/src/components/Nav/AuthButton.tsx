// src/components/Nav/AuthButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../stores/store-context';
import { Button } from 'reactstrap';


export const AuthButton = observer(() => {
  const navigate = useNavigate();
  const { authStore } = useStores();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (authStore.isAuthenticated) {
      authStore.logout();
      // If you need navigation after logout, you can add it here
      navigate('/login');
    } else {
      navigate('/login');
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

