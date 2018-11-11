package com.ex.meme.dao;

import com.ex.meme.entities.Comment;
import com.ex.meme.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentDao extends JpaRepository<Comment,Integer> {

    List<Comment> findAllByPostId(Post p);
}
