import React from 'react';
import { useAuth } from '../components/AuthContext';

const LogOut: React.FC = () => {
  const { logOut } = useAuth();

  return (
    <div>
      <h1>LogOut</h1>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
};

export default LogOut;
