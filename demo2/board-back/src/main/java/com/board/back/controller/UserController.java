package com.board.back.controller;
import com.board.back.model.User;
import com.board.back.model.User2;
import com.board.back.service.LoginService;
import com.board.back.service.UserService;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.GsonBuilderUtils;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class UserController {
    private LoginService loginService;
    private UserService userService;

    @Autowired
    public UserController(UserService userService, LoginService loginService) {
        this.userService = userService;
        this.loginService = loginService;
    }
//login
    @PostMapping("/login")
    public void loginUser(@RequestBody User2 user) {
        System.out.println("@PostMapping(\"/login\")");
//        System.out.println(user.toString());
//        System.out.println(user.getId());
        List<User2> us = loginService.findAll(user.getId());
    }

//    @GetMapping(value = "/login2")
//    public void list(Model model) {
//        List<User2> us = loginService.findById();
//        System.out.println(us);
//    }

// create board
    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
//        System.out.println("@PostMapping(\"/user\")");
//        System.out.println(user.toString());
        return userService.createUser(user);
    }
    /*
     * @PostMapping("/test") public void createTest(@RequestBody String testLine) {
     * UserInput.insert_query(testLine); }
     *
     * @GetMapping("/user/{user_no}") public ResponseEntity<User> getUserByNo(
     *
     * @PathVariable Integer user_no) { return userService.getUser(user_no); }
     */

}
