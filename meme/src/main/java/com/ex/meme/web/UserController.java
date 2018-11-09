package com.ex.meme.web;

import com.ex.meme.entities.Comment;
import com.ex.meme.entities.Post;
import com.ex.meme.entities.TokenDTO;
import com.ex.meme.entities.User;
import com.ex.meme.services.CommentService;
import com.ex.meme.services.PostService;
import com.ex.meme.services.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("/user-api")
public class UserController
{
    PostService postService;
    UserService userService;
    CommentService commentService;

    @Autowired
    public void setCommentService(CommentService commentService) { this.commentService = commentService;}

    @Autowired
    public void setPostService(PostService postService) {
        this.postService = postService;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/login", consumes="application/json")
    //@GetMapping(value = "/comment", consumes = "application/json")
    public void addPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {

        User e = new ObjectMapper().readValue(req.getInputStream(), User.class);

        if(e.getEmail() == null || e.getPassword() == null)
        {
            resp.setStatus(400);
            System.out.println("email or password is null");
            return;
        }else {
            //e = service.getOne(e.getEmail(), e.getHash());
            e = userService.getUserByEmailAndPassword(e.getEmail(), e.getPassword());
        }

        if(e != null)
        {
            try
            {
                TokenDTO token = userService.getToken(e, 3600000);
                resp.getWriter().write(new ObjectMapper().writeValueAsString(token));
                resp.setStatus(200);
                //logger.info("Account : " + e.toString() + " logged in");
                return;
            } catch(Exception ex)
            {
                resp.setStatus(500);
                //logger.error("500 error has been thrown : ");
                //logger.error(ex.getMessage());
                return;
            }

        }else
        {
            resp.setStatus(401);
            return;
        }
    }

    @PostMapping(value = "/create", consumes="application/json")
    //@GetMapping(value = "/comment", consumes = "application/json")
    public void createUser(HttpServletRequest req, HttpServletResponse resp) throws IOException {

        User u = new ObjectMapper().readValue(req.getInputStream(), User.class);

        userService.addUser(u);


    }
}