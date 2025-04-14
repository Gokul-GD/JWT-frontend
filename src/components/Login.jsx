import React, { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await API.post('/api/auth/login', form);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user',JSON.stringify(res.data.user));
          navigate('/dashboard');
        }catch (err) {
            alert(err.response.data.message || 'Login failed ❌');
        }
    };

   return (
   
    <div className='log'>
    <form className='logf'  onSubmit={handleSubmit}>
    <input name="email" placeholder="Email" onChange={handleChange} />
    <input name="password" type="password" placeholder="Password" onChange={handleChange} />
    <button type="submit">Login</button>
    <p style={{ marginTop: '10px' }}>
  Forgot password? <a href="/forgot-password">Reset here</a>
</p>
    </form>
    </div>
  
   );
} 

export default Login;

