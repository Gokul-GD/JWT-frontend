import React from 'react';
import '../App.css'
import { useNavigate,Link } from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    };

    return (
      <div
    >
          <h2>Welcome, {user?.name} 🎉 to our JWT </h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
}
export default Dashboard;