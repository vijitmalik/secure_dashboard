import React from 'react';
import Form from './Form';
import { useDispatch } from 'react-redux';
import { login } from '../store/asyncActions';

const Login: React.FC = () => {

  const dispatch = useDispatch();
  const handleLogin = (formData: { email: string; password: string }) => {
    dispatch(login(formData) as any);
  };

  return (
    <>
      <h2>Let's Login</h2>
      <div className="centered-container">
        <Form onSubmit={handleLogin} buttonText="Login" />
      </div>
    </>
  );
};

export default Login;
