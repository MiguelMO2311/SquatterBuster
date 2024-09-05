import React from 'react';
import { useAuth } from '../components/AuthContext';

const LogIn: React.FC = () => {
  const { logIn } = useAuth();

  return (
    <div>
      <h1>LogIn</h1>
      <button onClick={logIn}>LogIn</button>
    </div>
  );
};

export default LogIn;
