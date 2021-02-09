package com.board.back.controller;

import com.board.back.model.Board;
import com.board.back.model.User;
import com.board.back.service.BoardService;
import com.board.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
    String a="";
    @Autowired
    private UserService userService;
    private User user;
    // create
    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/user\")");
        System.out.println(user.toString());
        return userService.createUser(user);
    }

    // create board
    @PostMapping("/test")
    public void createTest(@RequestBody String testLine) {
        a=testLine;
        if(a.length()==7){
            System.out.println(a);
        }
    }
    // get
    @GetMapping("/user/{user_no}")
    public ResponseEntity<User> getUserByNo(
            @PathVariable Integer user_no) {
        return userService.getUser(user_no);
    }

}
