package com.ex.meme.services;


import com.ex.meme.dao.CommentDao;
import com.ex.meme.entities.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CommentService {


    CommentDao commentDao;

    @Autowired
    public void setCommentDao(CommentDao commentDao) {
        this.commentDao = commentDao;
    }

    @Transactional(readOnly=true)
    public List<Comment> getAllComment() {
        return commentDao.findAll();
    }

    public Integer addComment(Comment v) {
        return commentDao.save(v).getId();
    }

}