package com.board.back.controller;
import com.board.back.model.User;
import com.board.back.service.LoginService;
import com.board.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/login")
    public void loginUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/login\")");
        System.out.println(user.toString());
        loginService.postUser(user);
    }

    // GET용 User2
    @GetMapping("/login2")
    public int checkUser() {
        if (loginService.getStatus() == true || loginService.getStatus() == false)
            return loginService.getNo();
        return loginService.getNo();
    }

    @PostMapping("/user")
    public void createUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/user\")");
        System.out.println(user.toString());
        userService.createUser(user);
    }
}
