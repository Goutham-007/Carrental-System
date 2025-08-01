package com.carrental.carrental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrental.carrental.dto.BookingDTO;
import com.carrental.carrental.service.BookingService;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping
    public BookingDTO bookCar(@RequestBody BookingDTO bookingDTO) {
        return bookingService.bookCar(bookingDTO);
    }

    @GetMapping("/user/{userId}")
    public List<BookingDTO> getUserBookings(@PathVariable Long userId) {
        return bookingService.getUserBookings(userId);
    }

    @GetMapping
    public List<BookingDTO> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @DeleteMapping("/{bookingId}")
    public void cancelBooking(@PathVariable Long bookingId) {
        bookingService.cancelBooking(bookingId);
    }
}
