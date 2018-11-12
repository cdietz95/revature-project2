package com.ex.meme.services;


import com.ex.meme.dao.PostDao;
import com.ex.meme.entities.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PostService {
    PostDao postDao;

    @Autowired
    public void setSuitDao(PostDao postDao) {
        this.postDao = postDao;
    }

    @Transactional(readOnly=true)
    public List<Post> getAllPost() {
        return postDao.findAll();
    }

    @Transactional(readOnly=true)
    public Post getPost(Integer id) {
        Optional<Post> p = postDao.findById(id);

        if(p.isPresent()) {
            return p.get();
        } else {
            return null;
        }
    }

    @Transactional(readOnly=true)
    public Post getPostByUrl(String url) {

        System.out.println("Service URL : " + url);

        Post p = postDao.findByUrl(url);
        //System.out.println("Service Post"+p.toString());
        return p;
    }

    @Transactional
    public Integer updatePost(Post p)
    {
        postDao.save(p);


        return 200;
    }


    public Integer addPost(Post p) {
        return postDao.save(p).getId();
    }

}
