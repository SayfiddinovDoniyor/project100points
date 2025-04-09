package com.example.demo;

import com.example.carconfigurator.model.Car;
import com.example.carconfigurator.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping("/{id}")
    public Optional<Car> getCar(@PathVariable Long id) {
        return carRepository.findById(id);
    }

    @PostMapping
    public Car saveCar(@RequestBody Car car) {
        return carRepository.save(car);
    }
}
