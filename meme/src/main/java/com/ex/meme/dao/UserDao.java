package com.ex.meme.dao;

import com.ex.meme.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {
    User findByEmail(String email);
    User findByUsernameAndPassword(String username, String password);
    User findById(int id);
}
