package com.board.back.controller;
import com.board.back.model.Class;
import com.board.back.service.ClassService;
import com.board.back.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ClassController {
    @Autowired
    private ClassService classService;
    @Autowired
    private CourseService courseService;

    @Autowired
    public ClassController(ClassService classService) {
        this.classService = classService;
    }

    @PostMapping("/classUser")
    public void getUser(@RequestBody Integer no) {
        System.out.println("@PostMapping(\"/getUser\")");
        classService.getUser(no);
    }

//    @GetMapping("/class")
//    public List<Class> printClass(){
//        System.out.println("@GetMapping(\"/printClass\")");
//        return classService.printClass();
//    }

}
