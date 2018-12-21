package com.sandy.example.pilgrimService.components;

import com.sandy.example.pilgrimService.models.Outing;
import com.sandy.example.pilgrimService.models.Pilgrim;
import com.sandy.example.pilgrimService.models.YellowTShirt;
import com.sandy.example.pilgrimService.repositories.OutingRepository;
import com.sandy.example.pilgrimService.repositories.PilgrimRepository;
import com.sandy.example.pilgrimService.repositories.YellowTShirtRepository.YellowTShirtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    YellowTShirtRepository yellowTShirtRepository;

    @Autowired
    PilgrimRepository pilgrimRepository;

    @Autowired
    OutingRepository outingRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {
        DateFormat sfd = new SimpleDateFormat("dd-MM-yy");
        String newDate = "24-07-2018";
        Date date = null;
        try {
            date = sfd.parse(newDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        YellowTShirt legend = new YellowTShirt("The Legend", "S");
        yellowTShirtRepository.save(legend);

        YellowTShirt chief = new YellowTShirt("The Chief", "S");
        yellowTShirtRepository.save(chief);


        YellowTShirt jack = new YellowTShirt("Jack", "D");
        yellowTShirtRepository.save(jack);

        YellowTShirt victor = new YellowTShirt("Victor", "D");
        yellowTShirtRepository.save(victor);

        YellowTShirt isa = new YellowTShirt("Isa", "L");
        yellowTShirtRepository.save(isa);

        YellowTShirt winston = new YellowTShirt("Winston", "L");
        yellowTShirtRepository.save(winston);

        Pilgrim bert = new Pilgrim("Bert", 201);
        pilgrimRepository.save(bert);

        Pilgrim nan = new Pilgrim("Nan", 200);
        pilgrimRepository.save(nan);

        Outing outing1 = new Outing(nan);
        outing1.addYellowTShirt(chief);
        outing1.addYellowTShirt(legend);
        outingRepository.save(outing1);

        outing1.markReturned();
        outingRepository.save(outing1);

        Outing outing2 = new Outing(bert);
        outing2.addYellowTShirt(legend);
        outingRepository.save(outing2);

    }
}
