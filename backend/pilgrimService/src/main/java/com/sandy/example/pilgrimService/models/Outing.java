package com.sandy.example.pilgrimService.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "outings")
public class Outing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties("outings")
    @ManyToOne
    @JoinColumn(name = "pilgrim_id", nullable = false)
    private Pilgrim pilgrim;

    @Column(name="time_out")
    private Date timeOut;

    @Column(name = "time_in")
    private Date timeIn;

    @JsonIgnoreProperties("outings")
    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "yellowtshirts_outings",
            joinColumns = {@JoinColumn(name = "outing_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="yellowtshirt_id", nullable = false, updatable = false)}
    )
    private List<YellowTShirt> yellowTShirts;

    public Outing() {
        this.yellowTShirts = new ArrayList<>();
        this.timeOut = new Date();
    }

    public Outing(Pilgrim pilgrim) {
        this.pilgrim = pilgrim;
        this.yellowTShirts = new ArrayList<>();
        this.timeOut = new Date();
    }

    public Outing(Pilgrim pilgrim, List<YellowTShirt> yellowTShirts) {
        this.pilgrim = pilgrim;
        this.yellowTShirts = yellowTShirts;
        this.timeOut = new Date();
    }

    public Outing(Pilgrim pilgrim, YellowTShirt yellowTShirt) {
        this.pilgrim = pilgrim;
        this.yellowTShirts = new ArrayList<>();
        this.addYellowTShirt(yellowTShirt);
        this.timeOut = new Date();
    }
    public Pilgrim getPilgrim() {
        return pilgrim;
    }

    public void setPilgrim(Pilgrim pilgrim) {
        this.pilgrim = pilgrim;
    }

    public List<YellowTShirt> getYellowTShirts() {
        return yellowTShirts;
    }

    public void setYellowTShirts(List<YellowTShirt> yellowTShirts) {
        this.yellowTShirts = yellowTShirts;
    }

    public Date getTimeOut() {
        return timeOut;
    }

    public void setTimeOut(Date timeOut) {
        this.timeOut = timeOut;
    }

    public void setTimeOut() {
        this.timeOut = new Date();
    }

    public Date getTimeIn() {
        return timeIn;
    }

    public void setTimeIn(Date timeIn) {
        this.timeIn = timeIn;
    }

    public void addYellowTShirt(YellowTShirt yellowTShirt) {
        this.yellowTShirts.add(yellowTShirt);
    }

    public void markReturned() {
        this.timeIn = new Date();
    }

}
