package com.sandy.example.pilgrimService.repositories;

import com.sandy.example.pilgrimService.models.Outing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OutingRepository extends JpaRepository<Outing, Long> {
}
