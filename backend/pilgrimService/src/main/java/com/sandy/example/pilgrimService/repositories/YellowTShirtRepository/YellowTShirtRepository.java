package com.sandy.example.pilgrimService.repositories.YellowTShirtRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.sandy.example.pilgrimService.models.YellowTShirt;

@Repository
public interface YellowTShirtRepository extends JpaRepository<YellowTShirt, Long>, YellowTShirtRepositoryCustom {
}
