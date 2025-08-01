package com.carrental.carrental.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carrental.carrental.model.Booking;
import com.carrental.carrental.model.User;
public interface BookingRepository extends JpaRepository<Booking, Long> {
     List<Booking> findByUser(User user);

}
