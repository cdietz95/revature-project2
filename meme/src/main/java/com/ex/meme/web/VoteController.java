package com.ex.meme.web;


import com.ex.meme.entities.Post;
import com.ex.meme.entities.User;
import com.ex.meme.entities.Vote;
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

    /**
     * @author Jon, Felipe, Christina
     *
     * Method takes in an Integer value for contentType, it also requires an String to get a Post Instance.
     * Methord returns an integer value corresponding to the numbers of upvotes/downvotes(contentType determine
     * which one) for a particular image.
     *
     * @param contentValue
     * @param url
     * @return
     */
    @GetMapping(value="/{contentValue}")
    public int getVotes(@PathVariable ("contentValue") Integer contentValue, String url) {

        System.out.println("Looking for post url: " + url);

        Post p = postService.getPostByUrl(url);


       System.out.println("This is the post from the Database: " + p.toString());

        System.out.println("This is the content number I'm looking for " + contentValue);

       int numberOfVotes = voteService.getVoteQuantatity(p, contentValue);


        return numberOfVotes;


    }


    /**
     * @author Felipe, Christina
     *
     * Takes in a Vote instance from the client. The Vote object must have a valid USERID (USER.class)
     * and must have a valid url (POST.class). The Vote service will check if an entry has already
     * been inserted and adds the vote to if the record does not exist to ensure users cannot vote
     * more than once.
     *
     * @param v
     * @param resp
     * @return
     */

    @CrossOrigin(origins = "*")
    @PostMapping(value = "/vote")
    public ResponseEntity addVote(@RequestBody Vote v, HttpServletResponse resp) {

        System.out.println("This is the passed in Vote value from the client " + v.toString());


        int target = v.getUserID().getId();

        System.out.println("This is the userID " + target);

        User u = userService.getUser(target);

        System.out.println(u.toString());

        v.setUserID(u);
        System.out.println(v.toString());


        ////////////////////////////////////////////////////

        String target2 = v.getPostId().getUrl();


        System.out.println("Looking for post url: " +target2);

        Post p = postService.getPostByUrl(target2);

        System.out.println("This is the post from the Database: " +p.toString());

        v.setPostId(p);

        System.out.println("This is the vote instance before calling the service" + v.toString());


        voteService.addVote(v);
//        resp.setStatus(201);
        resp.setHeader("Location", "http://localhost:8080/vote-api/vote/" + v.getId());
        return new ResponseEntity(HttpStatus.CREATED);
    }




}
