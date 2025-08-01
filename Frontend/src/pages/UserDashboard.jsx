import React, { useEffect, useState } from 'react';
import {
  Container, Typography, Grid, Card, CardMedia, CardContent, CardActions,
  Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import axios from '../api/axios';

export default function UserDashboard() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [open, setOpen] = useState(false);

  const fetchCars = async () => {
    try {
      const res = await axios.get('/admin/cars');
      const available = res.data.filter(car => car.available);
      setCars(available);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const calculateTotal = (start, end, price) => {
    const startDt = new Date(start);
    const endDt = new Date(end);
    if (start && end && endDt >= startDt) {
      const days = Math.ceil((endDt - startDt) / (1000 * 60 * 60 * 24));
      return days * price;
    }
    return 0;
  };

  useEffect(() => {
    if (selectedCar) {
      const total = calculateTotal(startDate, endDate, selectedCar.pricePerDay);
      setTotalAmount(total);
    }
  }, [startDate, endDate, selectedCar]);

  const handleBookClick = (car) => {
    setSelectedCar(car);
    setStartDate('');
    setEndDate('');
    setTotalAmount(0);
    setOpen(true);
  };

  const handleBooking = async () => {
    try {
      const userId = localStorage.getItem('userId');

      await axios.post('/bookings', {
        userId: parseInt(userId), 
        carId: selectedCar.id,
        startDate,
        endDate,
        totalAmount
      });

      setOpen(false);
      fetchCars();
      alert('Booking successful!');
    } catch (err) {
      console.error(err);
      alert('Booking failed. Try again.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Available Cars
      </Typography>
      <Grid container spacing={3}>
        {cars.map(car => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={car.imageurl}
                alt={car.model}
              />
              <CardContent>
                <Typography variant="h6">{car.model}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹{car.pricePerDay} per day
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleBookClick(car)} size="small" variant="contained">
                  Book
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Book {selectedCar?.model}</DialogTitle>
        <DialogContent>
          <TextField
            label="Start Date"
            type="date"
            fullWidth
            sx={{ my: 1 }}
            InputLabelProps={{ shrink: true }}
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
          <TextField
            label="End Date"
            type="date"
            fullWidth
            sx={{ my: 1 }}
            InputLabelProps={{ shrink: true }}
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />

          {selectedCar && (
            <>
              <Typography variant="body1" sx={{ mt: 2 }}>
                ₹{selectedCar.pricePerDay} per day
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                Total: ₹{totalAmount}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleBooking} variant="contained" disabled={!startDate || !endDate}>
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
