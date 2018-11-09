package com.ex.meme.entities;


import javax.persistence.*;

@Entity
@Table(name="VOTE")
public class Vote {

    @Id
    @Column(name="VOTE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int content;


    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_ID")
    private User userID;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "POST_ID")
    private Post postId;

    public Vote() {
    }

    public Vote(int content, User userID, Post postId) {
        this.content = content;
        this.userID = userID;
        this.postId = postId;
    }

    @Override
    public String toString() {
        return "Vote{" +
                "id=" + id +
                ", content=" + content +
                ", userID=" + userID +
                ", postId=" + postId +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getContent() {
        return content;
    }

    public void setContent(int content) {
        this.content = content;
    }

    public User getUserID() {
        return userID;
    }

    public void setUserID(User userID) {
        this.userID = userID;
    }

    public Post getPostId() {
        return postId;
    }

    public void setPostId(Post postId) {
        this.postId = postId;
    }
    
}
