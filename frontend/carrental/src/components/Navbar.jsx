import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <AppBar 
      position="fixed"
      elevation={4}
      sx={{ 
        height: '80px',
        justifyContent: 'center',
        backgroundColor: '#1565c0'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 3 }}>
        <Typography
          variant="h5"
          onClick={() => navigate('/')}
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Segoe UI, Roboto, sans-serif',
            letterSpacing: 1,
            cursor: 'pointer'
          }}
        >
          Car Rental System
        </Typography>

        <Box>
          {!isLoggedIn ? (
            <>
              <Button color="inherit" onClick={() => navigate('/login')} sx={{ fontWeight: 500, mx: 1 }}>
                Login
              </Button>
              <Button color="inherit" onClick={() => navigate('/register')} sx={{ fontWeight: 500, mx: 1 }}>
                Register
              </Button>
            </>
          ) : (
            <>
              {role === 'USER' && (
                <>
                  <Button color="inherit" onClick={() => navigate('/user/dashboard')} sx={{ mx: 1 }}>
                    Dashboard
                  </Button>
                  <Button color="inherit" onClick={() => navigate('/user/mybookings')} sx={{ mx: 1 }}>
                    My Bookings
                  </Button>
                </>
              )}
              {role === 'ADMIN' && (
                <>
                  <Button color="inherit" onClick={() => navigate('/admin/dashboard')} sx={{ mx: 1 }}>
                    Manage Cars
                  </Button>
                  <Button color="inherit" onClick={() => navigate('/admin/bookings')} sx={{ mx: 1 }}>
                    View Bookings
                  </Button>
                </>
              )}
              <Button color="inherit" onClick={handleLogout} sx={{ fontWeight: 500, mx: 1 }}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
