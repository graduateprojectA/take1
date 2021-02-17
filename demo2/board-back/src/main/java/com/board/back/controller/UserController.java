package com.board.back.controller;

import com.board.back.model.User;
import com.board.back.service.LoginService;
import com.board.back.service.UserService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {
    private LoginService loginService;
    @Autowired
    public UserController(LoginService loginService) {
        this.loginService = loginService;
    }
    // create board

    @PostMapping("/login")
    public void loginUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/login\")");
        System.out.println(user.toString());
    }
    @GetMapping(value = "/login2")
    public void list(Model model) {
        List<User> us= loginService.getAllUser();
        System.out.println(us);
    }
    /*
    @PostMapping("/test")
    public void createTest(@RequestBody String testLine) {
        UserInput.insert_query(testLine);
    }
        @GetMapping("/user/{user_no}")
    public ResponseEntity<User> getUserByNo(
            @PathVariable Integer user_no) {
        return userService.getUser(user_no);
    }
     @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/user\")");
        System.out.println(user.toString());
        return userService.createUser(user);
    }*/
    // get


}
