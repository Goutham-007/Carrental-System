import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import carBanner from  "../images/car.webp"

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'absolute', 
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${carBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        m: 0,
        p: 0,
        zIndex: -1,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: 4,
          borderRadius: 2,
          textAlign: 'center',
          color: '#fff',
          maxWidth: '90%',
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" gutterBottom fontWeight="bold">
          Drive Your Dreams Today
        </Typography>
        <Typography variant="h6" paragraph>
          Find the perfect ride for your journey — fast, easy, and reliable.
        </Typography>
        <Button
          variant="contained"
          color="warning"
          size="large"
          onClick={() => navigate('/login')}
        >
          Start Booking Now
        </Button>
      </Box>
    </Box>
  );
}





