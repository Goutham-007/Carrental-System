package com.carrental.carrental.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carrental.carrental.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
      Optional <User> findByEmail(String email);
}
