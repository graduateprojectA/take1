package com.board.back.controller;
import com.board.back.model.User_preference;
import com.board.back.repository.CourseRepository;
import com.board.back.repository.UserPreferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PreferenceController {
    @Autowired
    private UserPreferenceRepository userPreferenceRepository;

    @PostMapping("/preferenceUser")
    public void preferenceUser(@RequestBody User_preference a) {
        System.out.println("@PostMapping(\"/preferenceUser\")");
        System.out.println(a);
        userPreferenceRepository.save(a);
    }
}
