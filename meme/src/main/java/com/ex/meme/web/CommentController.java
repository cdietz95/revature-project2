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
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    /*@RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Comment> getAllComment() {
        return commentService.getAllComment();
    }*/

    @PostMapping(value="/{c}", produces = "application/json", consumes = "application/json")
    public List<Comment> getAllCommentByPostID(@RequestBody Comment c, HttpServletResponse resp) {

        String target2 = c.getPostId().getUrl();

//        String target2 = "https://res.cloudinary.com/memecloud/image/fetch/https://res.cloudinary.com/memecloud/image/upload/v1541178452/test/tuiixmmajbeefqhd1wtf";


        System.out.println("Looking for post url: " +target2);

        Post p = postService.getPostByUrl(target2);


//        System.out.println("This is the comments from the Database: " + p.toString());
        List<Comment> coms = commentService.getAllByPost(p);
        System.out.println("next line is coms");
        for( Comment x : coms ) {
            System.out.println(x.toString());
        }

        resp.setHeader("Location", "http://localhost:8080/comment-api" + p.getId());


        return commentService.getAllByPost(p);


    }

    @PostMapping(value = "/comment")
    public ResponseEntity addPost(@RequestBody Comment c, HttpServletResponse resp) {

        int target = c.getUserID().getId();

        System.out.println("Looking for user ID: " + target);

        User u = userService.getUser(target);

        System.out.println("This is the user from the Database: " + u.toString());

        c.setUserID(u);
        //System.out.println(c.toString());

        //////////////////////////////////////////////////

        //int target2 = c.getPostId().getId();
        String target2 = c.getPostId().getUrl();


        System.out.println("Looking for post url: " +target2);

        Post p = postService.getPostByUrl(target2);

        System.out.println("This is the post from the Database: " +p.toString());

        c.setPostId(p);

        ////////////////////////////////////////////////////////////////////
        System.out.println("Comment to be saved ! "  + c.toString());

        commentService.addComment(c);
//        resp.setStatus(201);
        resp.setHeader("Location", "http://localhost:8080/comment-api/comment/" + c.getId());
        return new ResponseEntity(HttpStatus.CREATED);
    }

}
