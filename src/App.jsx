import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/Protect";
import ForgotPassword from "./components/ForgotPassword";
import './App.css'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } />
        <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
    
  );
}

export default App;
