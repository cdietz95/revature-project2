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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        if(e.getUsername() == null || e.getPassword() == null)
        {
            resp.setStatus(400);
            System.out.println("username or password is null");
            return;
        }else {
            //e = service.getOne(e.getEmail(), e.getHash());
            e = userService.getUserByEmailAndPassword(e.getUsername(), e.getPassword());
        }
        if(e != null)
        {
            try
            {
                TokenDTO token = userService.getToken(e, 360000000);
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

    @CrossOrigin(origins = "*")
    @PostMapping(value = "/user")
    public ResponseEntity createUser(@RequestBody User u, HttpServletResponse resp) {
        userService.addUser(u);
        resp.setHeader("Location", "http://localhost:8080/user" + u.getId());
        return new ResponseEntity(HttpStatus.CREATED);
    }


    /**
     * @author Christina, Jon , Felipe
     *
     * PUT method that updates all of the users variables. If a parameter is not given
     * then the user keeps their original information.
     *
     * @param id
     * @param email
     * @param firstN
     * @param lastN
     * @param username
     * @param password
     * @return
     */
    @CrossOrigin(origins = "*")
    @PutMapping("/user/{id}")
    public ResponseEntity updateUser(@PathVariable Integer id, String email, String firstN, String lastN, String username, String password)
    {
        User u = userService.getUser(id);
        System.out.println("The user in the table before any update" + u.toString());

        if(email != null) { u.setEmail(email);}
        if(firstN != null) {u.setFirstName(firstN);}
        if(lastN != null){u.setLastName(lastN);}
        if(username != null) {u.setUsername(username);}
        if(password != null) {u.setPassword(password);}

        System.out.println("The user in the table after updates" + u.toString());


        return new ResponseEntity(HttpStatus.valueOf(userService.updateUser(u)));
    }
}






//    @CrossOrigin(origins = "http://localhost:4200")
//@GetMapping(value = "/comment", consumes = "application/json")
//@CrossOrigin(origins = "*")
//@PostMapping(value = "/user")
//public ResponseEntity createUser(@RequestBody User u, HttpServletResponse resp) {
//
//    userService.addUser(u);
//    resp.setHeader("Location", "http://localhost:8080/user" + u.getId());
//    return new ResponseEntity(HttpStatus.CREATED);
//}
//    //    @CrossOrigin(origins = "http://localhost:4200")
//    //@GetMapping(value = "/comment", consumes = "application/json")