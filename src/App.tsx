import React, { useEffect, useState } from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';
import Header from './screens/Header';
import './App.css';
import { useSelector } from 'react-redux';
import { selectAuth } from './store/authSlice';

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isAuthenticated: boolean = useSelector(selectAuth);
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);

  useEffect(()=>{
    setIsAuthenticatedUser(isAuthenticated);
  },[isAuthenticated])


  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticatedUser} />
      {isAuthenticatedUser ? (
        <Dashboard />
      ) : showLogin ? (
        <Login />
      ) : (
        <Signup onLoginClick={handleLoginClick} />
      )}
    </div>
  );
};

export default App;
