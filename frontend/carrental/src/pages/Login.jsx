import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Box, Alert, Slide, Card, CardContent
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../api/axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('/auth/login', { email, password });
      const { token, role, id } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', id);

      if (role === 'ADMIN') navigate('/admin/dashboard');
      else navigate('/user/dashboard');
    } catch (err) {
      console.error(err);
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Box
      sx={{
    height: 'calc(100vh - 64px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #f3f4f6, #e2e8f0)',
    px: 2,
      }}
    >
      <Slide direction="up" in mountOnEnter unmountOnExit>
        <Card
          sx={{
            width: '100%',
            maxWidth: 420,
            p: 3,
            boxShadow: 6,
            borderRadius: 4,
            backgroundColor: '#fff'
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 1,
                color: '#333'
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                color: 'gray',
                mb: 3
              }}
            >
              Please enter your credentials to login
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.3,
                  fontWeight: 'bold',
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#115293' }
                }}
              >
                Login
              </Button>
            </form>

            <Typography
              variant="body2"
              sx={{
                mt: 3,
                textAlign: 'center',
                color: '#555'
              }}
            >
              New user?{' '}
              <Link to="/register" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 'bold' }}>
                Create an account
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Slide>
    </Box>
  );
}
