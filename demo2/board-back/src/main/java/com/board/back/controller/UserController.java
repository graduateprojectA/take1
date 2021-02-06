package com.board.back.controller;

import com.board.back.model.User;
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

    @Autowired
    private UserService userService;

    // get paging board
    @GetMapping("/user")
    public ResponseEntity<Map> getAllUsers(@RequestParam(value = "p_num", required=false) Integer p_num) {
        if (p_num == null || p_num <= 0) p_num = 1;

        return userService.getPagingUser(p_num);
    }
    // create
    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/user\")");
        System.out.println(user.toString());
        return userService.createUser(user);
    }

    // get
    @GetMapping("/user/{user_no}")
    public ResponseEntity<User> getUserByNo(
            @PathVariable Integer user_no) {
        return userService.getUser(user_no);
    }

    // update
    @PutMapping("/user/{user_no}")
    public ResponseEntity<User> updateUserByNo(
            @PathVariable Integer user_no, @RequestBody User user){
        return userService.updateUser(user_no, user);
    }

    // delete
    @DeleteMapping("/user/{no}")
    public ResponseEntity<Map<String, Boolean>> deleteUserByNo(
            @PathVariable Integer user_no) {
        return userService.deleteUser(user_no);
    }

}
