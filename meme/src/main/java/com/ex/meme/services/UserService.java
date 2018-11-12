package com.ex.meme.services;

import com.ex.meme.dao.UserDao;
import com.ex.meme.entities.TokenDTO;
import com.ex.meme.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.UnsupportedEncodingException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Jwts;



@Service
@Transactional
public class UserService {

    UserDao userDao;

    @Autowired
    public void setUserDao(UserDao userDao){
        this.userDao = userDao;
    }

    @Transactional(readOnly = true)
    public List<User> getAllUsers(){
        return userDao.findAll();
    }

    @Transactional(readOnly=true)
    public User getUser(Integer id) {
        Optional<User> u = userDao.findById(id);

        if(u.isPresent()) {
            return u.get();
        } else {
            return null;
        }
    }

    @Transactional
    public Integer updateUser(User user)
    {
        userDao.save(user);


        return 200;
    }

    public Integer addUser(User u){
        return userDao.save(u).getId();
    }

    public User getUserByEmailAndPassword(String username, String password) { return userDao.findByUsernameAndPassword(username, password);}

    public TokenDTO getToken(User e, long tll) throws UnsupportedEncodingException
    {
        TokenDTO token = new TokenDTO();
        Date now = new Date();
        Date future = Date.from(Instant.ofEpochMilli(now.getTime() + tll));

        String jwt = Jwts.builder()
                .setSubject(e.getEmail())
                .setIssuedAt(now)
                .setExpiration(future)
                .claim("user", e.getUsername())
                .signWith(SignatureAlgorithm.HS256, "mySecret".getBytes("UTF-8"))
                .compact();

        token.setIdToken(jwt);
        token.setUserName(e.getUsername());
        token.setUserId(e.getId());

        return token;
    }



}
