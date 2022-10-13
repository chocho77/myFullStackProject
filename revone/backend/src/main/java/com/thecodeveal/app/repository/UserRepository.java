package com.thecodeveal.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thecodeveal.app.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
