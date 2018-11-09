package com.ex.meme.entities;


import javax.persistence.*;

@Entity
@Table(name="MEMES")
public class Pics {
    @Id
    @Column(name="MEME_ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name="MEME_NAME")
    private String name;

    private int upVote;
    private int downVote;

    public Pics() {};

    public Pics(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
