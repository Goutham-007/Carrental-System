import React, { useEffect, useState } from 'react';
import {
  Container, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from '@mui/material';
import axios from '../api/axios';

export default function AdminViewBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('/bookings')
      .then(res => setBookings(res.data))
      .catch(err => {
        console.error('Error fetching bookings:', err);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>All Bookings</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Car</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Total Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map(b => (
              <TableRow key={b.id}>
                <TableCell>{b.userName || 'Unknown'}</TableCell>
                <TableCell>{b.carModel || 'Unknown'}</TableCell>
                <TableCell>{b.startDate}</TableCell>
                <TableCell>{b.endDate}</TableCell>
                <TableCell>₹{b.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
