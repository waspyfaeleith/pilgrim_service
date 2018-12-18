package com.sandy.example.pilgrimService.repositories;

import com.sandy.example.pilgrimService.models.Pilgrim;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PilgrimRepository extends JpaRepository<Pilgrim, Long> {
}
