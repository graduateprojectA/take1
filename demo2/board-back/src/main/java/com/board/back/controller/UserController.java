package com.board.back.controller;
import com.board.back.model.User;
import com.board.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import com.board.back.service.BoardService;
import com.board.back.service.UserInput;
import org.springframework.data.jpa.repository.Query;
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

    /*
    // create board
    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/user\")");
        System.out.println(user.toString());
        return userService.createUser(user);
    }

    @PostMapping("/test")
    public void createTest(@RequestBody String testLine) {
        UserInput.insert_query(testLine);
    }

    // get
    @GetMapping("/user/{user_no}")
    public ResponseEntity<User> getUserByNo(
            @PathVariable Integer user_no) {
        return userService.findUser();
    }
*/

    // 로그인 페이지
    @PostMapping("/login")
    // login (React에서 로그인 버튼을 눌렀을 때 넘어온 정보: 학번, pw  ==  User user)
    public void loginUser(@RequestBody User user) {
        System.out.println("@PostMapping(\"/login\")");
        System.out.println(user.toString());
        UserService.findUser(user);
    }

}
