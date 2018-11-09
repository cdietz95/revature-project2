package com.ex.meme.web;


import com.ex.meme.entities.Post;
import com.ex.meme.entities.User;
import com.ex.meme.entities.Vote;
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
@RequestMapping("/vote-api")
public class VoteController {

    PostService postService;
    UserService userService;
    VoteService voteService;

    @Autowired
    public void setVoteService(VoteService voteService) { this.voteService = voteService;}

    @Autowired
    public void setPostService(PostService postService) {
        this.postService = postService;
    }

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Vote> getAllVote() {
        return voteService.getAllVote();
    }

    @GetMapping(value ="/voteValue", consumes = "application/json")
    public List<Vote> getVoteByValue(HttpServletRequest req, HttpServletRequest resp)
    {
        List<Vote> listOfVotes = null;



        return listOfVotes;
    }

    //@PostMapping(value = "/post", consumes="application/json")
    @GetMapping(value = "/vote", consumes = "application/json")
    public void addVote(HttpServletRequest req, HttpServletResponse resp) {
        Vote v = new Vote();

        System.out.println(req.getParameter("title"));

        v.setContent(Integer.parseInt(req.getParameter("voteValue")));

        System.out.println(req.getParameter("voteValue"));

        int userNum = Integer.parseInt(req.getParameter("userID"));

        System.out.println("userNum is " + userNum);

        User u = new User();

        u = userService.getUser(userNum);

        System.out.println(u.toString());

        v.setUserID(u);

        int postNum = Integer.parseInt(req.getParameter("postId"));

        System.out.println("postNUm is " + postNum);

        Post p = new Post();

        p = postService.getPost(postNum);

        System.out.println(p.toString());

        v.setPostId(p);


        voteService.addVote(v);
        resp.setStatus(201);
        resp.setHeader("Location", "http://localhost:8080/vote-api/vote/" + v.getId());
    }

}
