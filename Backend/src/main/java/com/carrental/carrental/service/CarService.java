package com.carrental.carrental.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.carrental.carrental.dto.CarDTO;
import com.carrental.carrental.model.Car;
import com.carrental.carrental.repository.CarRepository;

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    public List<CarDTO> getAllCars() {
        return carRepository.findAll().stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    public CarDTO createCar(CarDTO carDTO) {
        Car car = mapToEntity(carDTO);
        return mapToDTO(carRepository.save(car));
    }

    public CarDTO updateCar(Long id, CarDTO carDTO) {
        Car car = carRepository.findById(id).orElseThrow();
        car.setBrand(carDTO.getBrand());
        car.setModel(carDTO.getModel());
        car.setNumber(carDTO.getNumber());
        car.setPricePerDay(carDTO.getPricePerDay());
        car.setAvailable(carDTO.isAvailable());
        car.setImageurl(carDTO.getImageurl());
        return mapToDTO(carRepository.save(car));
    }

    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }

    private CarDTO mapToDTO(Car car) {
        CarDTO dto = new CarDTO();
        dto.setId(car.getId());
        dto.setBrand(car.getBrand());
        dto.setModel(car.getModel());
        dto.setNumber(car.getNumber());
        dto.setPricePerDay(car.getPricePerDay());
        dto.setAvailable(car.isAvailable());
        dto.setImageurl(car.getImageurl());
        
        return dto;
    }

    private Car mapToEntity(CarDTO dto) {
        Car car = new Car();
        car.setBrand(dto.getBrand());
        car.setModel(dto.getModel());
        car.setNumber(dto.getNumber());
        car.setPricePerDay(dto.getPricePerDay());
        car.setAvailable(dto.isAvailable());
        car.setImageurl(dto.getImageurl());
        return car;
    }
}
