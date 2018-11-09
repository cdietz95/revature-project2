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

/*    @PostMapping(value = "/post", consumes="application/json")
    public void addSuit(@RequestBody Post p, HttpServletResponse resp) {
//        addSuit(s);
        System.out.println(p.toString());
        postService.addPost(p);
        resp.setStatus(201);
        resp.setHeader("Location", "http://localhost:8080/post-api/post/" + p.getId());
    }*/

    //@PostMapping(value = "/post", consumes="application/json")
    @GetMapping(value = "/post", consumes = "application/json")
    public void addPost(HttpServletRequest req, HttpServletResponse resp) {
//        addSuit(s);
        Post p = new Post();

        System.out.println(req.getParameter("title"));

        p.setTitle(req.getParameter("title"));
        p.setUrl(req.getParameter("url"));
        p.setCaption(req.getParameter("caption"));

        System.out.println(req.getParameter("authorNumber"));

        int targetNum = Integer.parseInt(req.getParameter("authorNumber"));

        System.out.println("targetnum is " + targetNum);

        User u = new User();

        u = userService.getUser(targetNum);

        System.out.println(u.toString());

        p.setAuthor(u);

        System.out.println(p.toString());


        postService.addPost(p);
        resp.setStatus(201);
        resp.setHeader("Location", "http://localhost:8080/post-api/post/" + p.getId());
    }

}
