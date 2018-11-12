package com.ex.meme.dao;

import com.ex.meme.entities.Post;
import com.ex.meme.entities.User;
import com.ex.meme.entities.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VoteDao extends JpaRepository<Vote,Integer> {
    List<Vote> findAllByContentIsAndAndPostId(int num, int postID);
    Vote findByPostIdAndUserID(Post postId, User userID);
    List<Vote> findByPostIdAndContent(Post p, Integer i);
}
