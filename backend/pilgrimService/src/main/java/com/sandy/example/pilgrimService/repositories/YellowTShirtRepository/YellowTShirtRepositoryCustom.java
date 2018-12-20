package com.sandy.example.pilgrimService.repositories.YellowTShirtRepository;

import com.sandy.example.pilgrimService.models.YellowTShirt;

import java.util.List;

public interface YellowTShirtRepositoryCustom {
    List<YellowTShirt> getYellowTShirtsForGroup(String group);
}
