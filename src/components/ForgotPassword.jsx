import React, { useState } from 'react';
import API from '../utils/api'; 


function ForgotPassword() {
  const [form, setForm] = useState({ email: '', newPassword: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/auth/forgot-password', form);
      alert(res.data.message || 'Password reset successful ✅');
    } catch (err) {
      alert(err.response?.data?.message || 'Password reset failed ❌');
    }
  };

  return (
    <div className='log'>
      <h2>Forgot Password</h2>
      <form className='logf' onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter your registered email"
          onChange={handleChange}
        />
        <input
          name="newPassword"
          type="password"
          placeholder="Enter new password"
          onChange={handleChange}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;