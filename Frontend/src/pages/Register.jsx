import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Card,
  CardContent,
  Slide,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:8080/api/auth/register', formData);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      console.error(err);
      setError('Registration failed! Please try again.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f3f4f6, #e2e8f0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        marginTop:7
      }}
    >
      <Slide direction="up" in mountOnEnter unmountOnExit>
        <Card
          sx={{
            width: '100%',
            maxWidth: 460,
            p: 3,
            boxShadow: 6,
            borderRadius: 4,
            backgroundColor: '#fff',
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}
            >
              Create Your Account
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: 'center', color: 'gray', mb: 3 }}
            >
              Fill in the details to get started
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <TextField
                select
                label="Role"
                name="role"
                fullWidth
                margin="normal"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <MenuItem value="USER">User</MenuItem>
                <MenuItem value="ADMIN">Admin</MenuItem>
              </TextField>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.3,
                  fontWeight: 'bold',
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#115293' },
                }}
              >
                Register
              </Button>
            </form>

            <Typography
              variant="body2"
              sx={{ mt: 3, textAlign: 'center', color: '#555' }}
            >
              Already have an account?{' '}
              <span
                style={{
                  color: '#1976d2',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/login')}
              >
                Login here
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Slide>
    </Box>
  );
}
