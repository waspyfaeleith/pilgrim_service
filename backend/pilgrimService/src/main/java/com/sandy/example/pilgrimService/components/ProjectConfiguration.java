package com.sandy.example.pilgrimService.components;

import com.sandy.example.pilgrimService.models.Outing;
import com.sandy.example.pilgrimService.models.Pilgrim;
import com.sandy.example.pilgrimService.models.YellowTShirt;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;

@Component
class ProjectConfiguration extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(YellowTShirt.class);
        config.exposeIdsFor(Outing.class);
        config.exposeIdsFor(Pilgrim.class);

    }
}
