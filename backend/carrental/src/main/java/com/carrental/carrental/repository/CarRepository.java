package com.carrental.carrental.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carrental.carrental.model.Car;
public interface CarRepository extends JpaRepository<Car, Long>{
    List<Car> findByAvailableTrue();

}
