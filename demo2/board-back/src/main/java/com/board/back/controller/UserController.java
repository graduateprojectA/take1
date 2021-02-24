package com.board.back.controller;

import com.board.back.model.User;
import com.board.back.model.User2;
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
    private UserService userService;

    @Autowired
    public UserController(UserService userService, LoginService loginService) {
        this.userService = userService;
        this.loginService = loginService;
    }
    // create board

    @PostMapping("/login")
    public void loginUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/login\")");
        loginService.postUser(user);
    }

    // GET용 User2
    public int checkUser() {
        if (loginService.getStatus() == true || loginService.getStatus() == false)
            return loginService.getNo();

        return loginService.getNo();
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/user\")");
        System.out.println(user.toString());
        return userService.createUser(user);
    }

    /*
     * @PostMapping("/test") public void createTest(@RequestBody String testLine) {
     * UserInput.insert_query(testLine); } <<<<<<< HEAD
     * 
     * @GetMapping("/user/{user_no}") public ResponseEntity<User> getUserByNo(
     * 
     * =======
     *
     * @GetMapping("/user/{user_no}") public ResponseEntity<User> getUserByNo(
     *
     * >>>>>>> eaf07e8555defe8625ecc22eb009a4274f4ea6c2
     * 
     * @PathVariable Integer user_no) { return userService.getUser(user_no); }
     */
    // get

}
