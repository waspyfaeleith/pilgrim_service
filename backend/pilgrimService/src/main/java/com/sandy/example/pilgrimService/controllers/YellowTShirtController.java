package com.sandy.example.pilgrimService.controllers;

import com.sandy.example.pilgrimService.models.YellowTShirt;
import com.sandy.example.pilgrimService.repositories.YellowTShirtRepository.YellowTShirtRepository;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/yellowTShirts")
public class YellowTShirtController {
    @Autowired
    YellowTShirtRepository yellowTShirtRepository;

    @GetMapping(value = "/group/{group}")
    public List<YellowTShirt> findAllYellowTShirtsInGroup(@PathVariable String group) {
        return yellowTShirtRepository.getYellowTShirtsForGroup(group);
    }
}
