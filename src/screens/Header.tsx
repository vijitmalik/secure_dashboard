import React from 'react';
import Cookies from 'js-cookie';
import { logout } from '../store/asyncActions';
import { useDispatch } from 'react-redux';

interface HeaderComponentProps {
  isAuthenticated: boolean;
}

const Header: React.FC<HeaderComponentProps> = ({ isAuthenticated }) => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    Cookies.remove('token');
    dispatch(logout() as any);
  }

  return (
    <div className="header">
      <h1>My App</h1>
      {isAuthenticated && <button className='logout-button' onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Header;
