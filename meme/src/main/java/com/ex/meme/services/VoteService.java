package com.ex.meme.services;


import com.ex.meme.dao.VoteDao;
import com.ex.meme.entities.Vote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class VoteService {
    VoteDao voteDao;

    @Autowired
    public void setVoteDao(VoteDao voteDao) {
        this.voteDao = voteDao;
    }

    @Transactional(readOnly=true)
    public List<Vote> getAllVote() {
        return voteDao.findAll();
    }

    public Integer addVote(Vote v) {
        return voteDao.save(v).getId();
    }

}