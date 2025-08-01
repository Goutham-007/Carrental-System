import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminViewBookings from './pages/AdminViewBookings';
import MyBookings from './pages/MyBookings';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/user/dashboard"
          element={
            <ProtectedRoute role="USER">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/mybookings"
          element={
            <ProtectedRoute role="USER">
              <MyBookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminViewBookings />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
