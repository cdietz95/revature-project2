package com.ex.meme.services;


import com.ex.meme.dao.VoteDao;
import com.ex.meme.entities.Post;
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

    @Transactional(readOnly = true)
    public Integer getVoteQuantatity(Post p, Integer content)
    {
        List<Vote> ls = voteDao.findByPostIdAndContent(p, content);

        System.out.println("The number of votes is : " + ls.size());
        return ls.size();
    }

    public Integer addVote(Vote v) {

        System.out.println("We are now in the addVote method in service");

        Vote record = voteDao.findByPostIdAndUserID(v.getPostId(), v.getUserID());

        System.out.println(voteDao.toString());

        if(record == null)
        {
            return voteDao.save(v).getId();
        }else
        {
            v.setId(record.getId());
            return voteDao.save(v).getId();
        }

    }

}