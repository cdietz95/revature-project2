package com.ex.meme.web;


import com.ex.meme.entities.Comment;
import com.ex.meme.entities.Post;
import com.ex.meme.entities.User;
import com.ex.meme.entities.Vote;
import com.ex.meme.services.CommentService;
import com.ex.meme.services.PostService;
import com.ex.meme.services.UserService;
import com.ex.meme.services.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/comment-api")
public class CommentController {

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

    @RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Comment> getAllComment() {
        return commentService.getAllComment();
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
    @GetMapping(value = "/comment", consumes = "application/json")
    public void addPost(HttpServletRequest req, HttpServletResponse resp) {
        Comment c = new Comment();

        c.setContent(req.getParameter("content"));

        System.out.println(req.getParameter("content"));

        int userNum = Integer.parseInt(req.getParameter("userID"));

        System.out.println("userNum is " + userNum);

        User u = new User();

        u = userService.getUser(userNum);

        System.out.println(u.toString());

        c.setUserID(u);

        int postNum = Integer.parseInt(req.getParameter("postId"));

        System.out.println("postNUm is " + postNum);

        Post p = new Post();

        p = postService.getPost(postNum);

        System.out.println(p.toString());

        c.setPostId(p);


        commentService.addComment(c);
        resp.setStatus(201);
        resp.setHeader("Location", "http://localhost:8080/comment-api/comment/" + c.getId());
    }

}
