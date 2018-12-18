package com.sandy.example.pilgrimService.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "yellowtshirts")
public class YellowTShirt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "shift")
    private String shift;

    @JsonIgnoreProperties("yellowtshirts")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            joinColumns = {@JoinColumn(name = "yellowtshirt_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name = "outing_id", nullable = false, updatable = false)}
    )
    private List<Outing> outings;

    public YellowTShirt() {
    }

    public YellowTShirt(String name, String group) {
        this.name = name;
        this.shift = group;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGroup() {
        return shift;
    }

    public void setGroup(String group) {
        this.shift = group;
    }
}

