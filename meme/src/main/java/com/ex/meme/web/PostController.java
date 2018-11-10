package com.ex.meme.web;


import com.ex.meme.entities.Post;
import com.ex.meme.entities.User;
import com.ex.meme.services.PostService;
import com.ex.meme.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/post-api")
public class PostController {

    PostService postService;
    UserService userService;

    @Autowired
    public void setPostService(PostService postService) {
        this.postService = postService;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Post> getAllPost() {
        return postService.getAllPost();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/post")
    public ResponseEntity addPost(@RequestBody Post p, HttpServletResponse resp) {

        System.out.println(p.toString());

        User u = p.getAuthor();

        System.out.println(u.toString());

        p.setAuthor(u);

        System.out.println(p.toString());


        postService.addPost(p);
//        resp.setStatus(201);
        resp.setHeader("Location", "http://localhost:8080/post-api/post/" + p.getId());
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
