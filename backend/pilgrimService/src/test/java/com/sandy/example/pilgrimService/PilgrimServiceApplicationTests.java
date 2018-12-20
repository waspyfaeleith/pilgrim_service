package com.sandy.example.pilgrimService;

import com.sandy.example.pilgrimService.models.Outing;
import com.sandy.example.pilgrimService.models.Pilgrim;
import com.sandy.example.pilgrimService.models.YellowTShirt;
import com.sandy.example.pilgrimService.repositories.OutingRepository;
import com.sandy.example.pilgrimService.repositories.PilgrimRepository;
import com.sandy.example.pilgrimService.repositories.YellowTShirtRepository.YellowTShirtRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PilgrimServiceApplicationTests {
	@Autowired
	YellowTShirtRepository yellowTShirtRepository;

	@Autowired
	PilgrimRepository pilgrimRepository;

	@Autowired
	OutingRepository outingRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void canCreateAndSaveHelper(){
		YellowTShirt yellowTShirt = new YellowTShirt("The Legend", "S");
		yellowTShirtRepository.save(yellowTShirt);

	}

	@Test
	public void canCreateAndSavePilgrim() {
		Pilgrim pilgrim = new Pilgrim("Bert", 201);
		pilgrimRepository.save(pilgrim);

	}

	@Test
	public void canCreateAndSaveOuting() {
		YellowTShirt yellowTShirt = new YellowTShirt("The Legend", "S");
		yellowTShirtRepository.save(yellowTShirt);

		Pilgrim pilgrim = new Pilgrim("Bert", 201);
		pilgrimRepository.save(pilgrim);

		Outing outing = new Outing(pilgrim);
		outingRepository.save(outing);

		outing.addYellowTShirt(yellowTShirt);
		outingRepository.save(outing);
	}

	@Test
	public void canReturnPilgrimAfterOuting() {
		YellowTShirt yellowTShirt = new YellowTShirt("The Legend", "S");
		yellowTShirtRepository.save(yellowTShirt);

		Pilgrim pilgrim = new Pilgrim("Bert", 201);
		pilgrimRepository.save(pilgrim);

		Outing outing = new Outing(pilgrim);
		outingRepository.save(outing);

		outing.addYellowTShirt(yellowTShirt);
		outingRepository.save(outing);

		outing.markReturned();
		outingRepository.save(outing);
	}

	@Test
	public void canGetYellowTShirtsForGivenGroup() {

		YellowTShirt legend = new YellowTShirt("The Legend", "S");
		yellowTShirtRepository.save(legend);

		YellowTShirt chief = new YellowTShirt("The Chief", "S");
		yellowTShirtRepository.save(chief);

		YellowTShirt jack = new YellowTShirt("Jack Jarvis", "D");
		yellowTShirtRepository.save(jack);

		YellowTShirt victor = new YellowTShirt("Victor McDade", "D");
		yellowTShirtRepository.save(victor);

		List<YellowTShirt> sGroup = yellowTShirtRepository.getYellowTShirtsForGroup("S");
		
	}

}

