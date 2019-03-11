package com.sandy.example.pilgrimService.components;

import com.sandy.example.pilgrimService.models.Outing;
import com.sandy.example.pilgrimService.models.Pilgrim;
import com.sandy.example.pilgrimService.models.YellowTShirt;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name="embedAllFromOuting", types= Outing.class)
public interface EmbedAllFromOuting {
    Pilgrim getPilgrim();
    List<YellowTShirt> getYellowTShirts();
    Date getTimeIn();
    Date getTimeOut();
}
