package com.board.back.controller;

import com.board.back.model.Course;
import com.board.back.repository.CourseRepository;
import com.board.back.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CourseController {
    private CourseService courseService;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/courseUser")
    public void getUser(@RequestBody Integer id) {
        System.out.println("@PostMapping(\"/getUser\")");
        courseService.getUser(id);
    }

    @GetMapping("/course")
    public List<Course> returnCourse() {
        if (courseService.getUser_no() != 0) {
            int id = courseService.getUser_id();
            int major = courseService.getUser_major();
            List<Course> a = courseRepository.findAll();
            System.out.printf("%d, %d",id,major);
            System.out.println(courseRepository.findByIdAndMajor(id,major));
            return courseRepository.findByIdAndMajor(id, major);
        } else {
            System.out.println("FAIL");
            return null;
        }
    }
}