package com.carrental.carrental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrental.carrental.dto.CarDTO;
import com.carrental.carrental.service.CarService;

@RestController
@RequestMapping("/api/admin/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping
    public List<CarDTO> getAllCars() {
        return carService.getAllCars();
    }

    @PostMapping
    public CarDTO addCar(@RequestBody CarDTO carDTO) {
        return carService.createCar(carDTO);
    }

    @PutMapping("/{id}")
    public CarDTO updateCar(@PathVariable Long id, @RequestBody CarDTO carDTO) {
        return carService.updateCar(id, carDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
    }
}