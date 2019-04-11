package com.sandy.example.pilgrimService.controllers;

import com.sandy.example.pilgrimService.models.Outing;
import com.sandy.example.pilgrimService.repositories.OutingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/outings")
public class OutingController {
    @Autowired
    OutingRepository outingRepository;

//    @GetMapping("/{id}")
//    public Outing findOutingById(@PathVariable Long id) {
//        Outing outing = outingRepository.getOne(id);
//        System.out.println(outing.getPilgrim().getName());
//        return outing;
//    }

    @GetMapping("/{id}/markReturned")
    public Outing markOutingReturnedById(@PathVariable Long id) {
        Outing outing = outingRepository.getOne(id);
        outing.markReturned();
        outingRepository.save(outing);
        return outing;
    }
}