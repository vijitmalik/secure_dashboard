import React, { useState } from 'react';

interface FormProps {
  onSubmit: (formData: { email: string; password: string }) => void;
  buttonText: string;
}

const Form: React.FC<FormProps> = ({ onSubmit, buttonText }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
