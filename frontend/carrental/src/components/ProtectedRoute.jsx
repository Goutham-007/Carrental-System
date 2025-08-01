import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ role, children }) {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (!token || userRole !== role) {
    return <Navigate to="/login" />;
  }

  return children;
}
