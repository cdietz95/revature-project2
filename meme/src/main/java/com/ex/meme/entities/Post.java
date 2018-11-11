package com.ex.meme.entities;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name="POST")
public class Post {

    @Id
    @Column(name="POST_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String url;
    private String caption;
    private String title;

    private LocalDateTime createDateTime;

    @PrePersist
    public void onCreate(){
        createDateTime = LocalDateTime.now();
    }

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="USER_ID")
    private User author;

    public Post() {
        onCreate();
    }

    /*public Post(String myPostID)
    {
        this.setId(Integer.parseInt(myPostID));
    }*/

    public Post(String myPostUrl)
    {
        this.setUrl(myPostUrl);
    }


    public Post(String url, String caption, String title, LocalDateTime createDateTime, User author) {
        this.url = url;
        this.caption = caption;
        this.title = title;
        this.createDateTime = createDateTime;
        this.author = author;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public LocalDateTime getCreateDateTime() {
        return createDateTime;
    }

    /*public void setCreateDateTime() {
        onCreate();
    }*/

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", url='" + url + '\'' +
                ", caption='" + caption + '\'' +
                ", title='" + title + '\'' +
                ", createDateTime=" + createDateTime +
                ", author=" + author +
                '}';
    }
}
