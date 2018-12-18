package com.sandy.example.pilgrimService.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "pilgrims")
public class Pilgrim {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "room_num")
    private int roomNumber;

    @JsonIgnoreProperties("outings")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "pilgrim", fetch = FetchType.LAZY)
    private List<Outing> outings;

    public Pilgrim() {
    }

    public Pilgrim(String name, int roomNumber) {
        this.name = name;
        this.roomNumber = roomNumber;
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

    public int getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(int roomNumber) {
        this.roomNumber = roomNumber;
    }

    public List<Outing> getOutings() {
        return outings;
    }

    public void setOutings(List<Outing> outings) {
        this.outings = outings;
    }
}
