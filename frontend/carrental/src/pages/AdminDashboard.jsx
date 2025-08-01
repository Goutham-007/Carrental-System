import React, { useEffect, useState } from 'react';
import {
  Box, Button, Container, Grid, TextField, Typography, Card, CardContent, CardActions
} from '@mui/material';
import axios from '../api/axios';

export default function AdminDashboard() {
  const [cars, setCars] = useState([]);
  const [form, setForm] = useState({
    model: '',
    brand: '',
    number: '',
    pricePerDay: '',
    available: true,
    imageurl: ''
  });
  const [editId, setEditId] = useState(null);

  const fetchCars = async () => {
    try {
      const res = await axios.get('/admin/cars');
      setCars(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (editId) {
        await axios.put(`/admin/cars/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post('/admin/cars', form);
      }
      setForm({ model: '', brand: '', number: '', pricePerDay: '', available: true, imageurl: '' });
      fetchCars();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (car) => {
    setEditId(car.id);
    setForm({
      model: car.model,
      brand: car.brand,
      number: car.number,
      pricePerDay: car.pricePerDay,
      available: car.available,
      imageurl: car.imageurl || ''
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/admin/cars/${id}`);
      fetchCars();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>

      <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} mb={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Car Model"
              name="model"
              fullWidth
              value={form.model}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Brand"
              name="brand"
              fullWidth
              value={form.brand}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Car Number"
              name="number"
              fullWidth
              value={form.number}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Price Per Day"
              name="pricePerDay"
              type="number"
              fullWidth
              value={form.pricePerDay}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Image URL"
              name="imageurl"
              fullWidth
              value={form.imageurl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {editId ? 'Update Car' : 'Add Car'}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Typography variant="h5" gutterBottom>Existing Cars</Typography>
      <Grid container spacing={2}>
        {cars.map(car => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Card>
              {car.imageurl && (
                <img
                  src={car.imageurl}
                  alt={car.model}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              )}
              <CardContent>
                <Typography variant="h6">{car.brand} - {car.model}</Typography>
                <Typography>Car Number: {car.number}</Typography>
                <Typography>₹{car.pricePerDay} / day</Typography>
                <Typography>Status: {car.available ? 'Available' : 'Not Available'}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleEdit(car)}>Edit</Button>
                <Button color="error" onClick={() => handleDelete(car.id)}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
