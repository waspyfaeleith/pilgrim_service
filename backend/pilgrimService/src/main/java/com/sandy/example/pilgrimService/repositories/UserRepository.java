package com.sandy.example.pilgrimService.repositories;

import com.sandy.example.pilgrimService.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    User findByUsername(String username);
}
