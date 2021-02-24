package com.board.back.controller;
import com.board.back.model.User;
import com.board.back.model.User_time;
import com.board.back.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TimeController {
    private TimeService timeService;

    @Autowired
    public TimeController(TimeService timeService) {
        this.timeService = timeService;
    }

    @PostMapping("/tableCheck")
    public User_time time(@RequestBody User_time user) {
        System.out.println("@PostMapping(\"/tableCheck\")");
        return timeService.excludeTime(user);
    }

}
