import React, { useState } from 'react';
import API from '../utils/api';
import { useNavigate,Link } from 'react-router-dom';
import '../App.css';

function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await API.post('/api/auth/register', form);
          alert('Registered successfully ✅');
          navigate('/login');
        } catch (err) {
          alert(err.response.data.msg || 'Registration failed ❌');
        }
};


return (
    <div className='res'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}  className='formres' >
        <input className='name' name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Submit</button>
       <p> Already have an account? <Link to="/login" >Login here</Link></p>
        </form>
    </div>
);

}

export default Register;