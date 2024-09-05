import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const Header: React.FC = () => {
  const { isAuthenticated, logIn, logOut } = useAuth();

  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl">SquatterBuster</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/report-property">Report Property</Link></li>
          <li><Link to="/contact-community">Contact Community</Link></li>
          <li><Link to="/legal-advice">Legal Advice</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          {isAuthenticated ? (
            <li><button onClick={logOut}>LogOut</button></li>
          ) : (
            <li><button onClick={logIn}>LogIn</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
