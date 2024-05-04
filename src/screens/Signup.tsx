import React, { useState } from 'react';
import Form from './Form';
import { useDispatch } from "react-redux";
import { signup } from '../store/asyncActions';

interface SignupComponentProps {
    onLoginClick: () => void;
  }

const Signup: React.FC<SignupComponentProps> = ({onLoginClick}) => {
    const [signupError, setSignupError] = useState('');
    const dispatch = useDispatch();


  const handleSignup = async (formData: { email: string; password: string }) => {
    try{
        await dispatch(signup(formData) as any);        
    }
    catch(error){
        setSignupError(error);
    }
  };

  return (
    <>
      <h2>Let's Create an Account</h2>
      <div className="centered-container">
        <Form onSubmit={handleSignup} buttonText="Signup" />
        {signupError && (
          <div>{signupError}</div>
        )}
      </div>
      <div>Already have an account?</div>
      <button className="login-button" onClick={onLoginClick}>Login</button>
    </>
  );
};

export default Signup;
