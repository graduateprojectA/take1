package com.board.back.controller;

import com.board.back.model.User;
import com.board.back.service.BoardService;
import com.board.back.service.UserInput;
import com.board.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
    String a="";
    @Autowired
    private UserService userService;
    public User user;
    // create board
    /*
    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/user\")");
        System.out.println(user.toString());
        return userService.createUser(user);
    }
*/
    /*
    @PostMapping("/test")
    public void createTest(@RequestBody String testLine) {
        UserInput.insert_query(testLine);
    }*/
    // get
    @GetMapping("/user/{user_no}")
    public ResponseEntity<User> getUserByNo(
            @PathVariable Integer user_no) {
        return userService.getUser(user_no);
    }

    // 로그인 페이지
    @RequestMapping("/login")
    public class LoginController {
        @GetMapping
        public String viewLogin(User user) {
            return "login";
        }
    }


}
