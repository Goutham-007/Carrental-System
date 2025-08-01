package com.carrental.carrental.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carrental.carrental.dto.BookingDTO;
import com.carrental.carrental.model.Booking;
import com.carrental.carrental.model.Car;
import com.carrental.carrental.model.User;
import com.carrental.carrental.repository.BookingRepository;
import com.carrental.carrental.repository.CarRepository;
import com.carrental.carrental.repository.UserRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private UserRepository userRepository;

    public BookingDTO bookCar(BookingDTO dto) {
        User user = userRepository.findById(dto.getUserId()).orElseThrow();
        Car car = carRepository.findById(dto.getCarId()).orElseThrow();

        car.setAvailable(false);
        carRepository.save(car);

        Booking booking = new Booking(user, car, dto.getStartDate(), dto.getEndDate(), dto.getTotalAmount());
        Booking saved = bookingRepository.save(booking);
        return mapToDTO(saved);
    }

    public List<BookingDTO> getUserBookings(Long userId) {
        User user = userRepository.findById(userId).orElseThrow();
        return bookingRepository.findByUser(user)
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    public List<BookingDTO> getAllBookings() {
        return bookingRepository.findAll()
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    public void cancelBooking(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId).orElse(null);
        if (booking != null) {
            Car car = booking.getCar();
            car.setAvailable(true);
            carRepository.save(car);
            bookingRepository.deleteById(bookingId);
        }
    }

    private BookingDTO mapToDTO(Booking booking) {
        BookingDTO dto = new BookingDTO();
        dto.setId(booking.getId());
        dto.setUserId(booking.getUser().getId());
        dto.setCarId(booking.getCar().getId());
        dto.setStartDate(booking.getStartDate());
        dto.setEndDate(booking.getEndDate());
        dto.setTotalAmount(booking.getTotalAmount());
         dto.setUserName(booking.getUser().getName());
          dto.setCarModel(booking.getCar().getModel());
        return dto;
    }
}
