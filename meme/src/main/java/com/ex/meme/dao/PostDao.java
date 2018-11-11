package com.ex.meme.dao;

import com.ex.meme.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostDao  extends JpaRepository<Post, Integer> {

    Post findByUrl(String url);

}
