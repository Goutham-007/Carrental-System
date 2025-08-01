import React, { useEffect, useState } from 'react';
import {
  Container, Typography, List, ListItem, ListItemText,
  IconButton, ListItemSecondaryAction, Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from '../api/axios';

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const res = await axios.get(`/bookings/user/${userId}`);
      setBookings(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const cancelBooking = async (bookingId) => {
    try {
      await axios.delete(`/bookings/${bookingId}`);
      fetchBookings();
      alert('Booking cancelled.');
    } catch (err) {
      console.error(err);
      alert('Failed to cancel booking.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>My Bookings</Typography>
      {bookings.length === 0 ? (
        <Typography>No bookings found.</Typography>
      ) : (
        <List>
          {bookings.map(b => (
            <React.Fragment key={b.id}>
              <ListItem>
                <ListItemText
                  primary={b.car?.model || 'Car Model'}
                  secondary={`From ${b.startDate} to ${b.endDate} | ₹${b.totalAmount}`}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => cancelBooking(b.id)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}
    </Container>
  );
}
