package com.sandy.example.pilgrimService.repositories;

import com.sandy.example.pilgrimService.components.EmbedAllFromOuting;
import com.sandy.example.pilgrimService.models.Outing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedAllFromOuting.class)
public interface OutingRepository extends JpaRepository<Outing, Long> {
}
