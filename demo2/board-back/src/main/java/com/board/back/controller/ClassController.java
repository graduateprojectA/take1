package com.board.back.controller;
import com.board.back.model.User_class;
import com.board.back.model.newClass;
import com.board.back.repository.ClassRepository;
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
    private ClassRepository classRepository;

    @Autowired
    public ClassController(ClassService classService) {
        this.classService = classService;
    }

    @PostMapping("/classUser")
    public void getUser(@RequestBody String no) {
        String id = no.replace("=", "");
        int num = Integer.parseInt(id);
        classService.getUser(num);
        classService.printClass(num);
    }

    @GetMapping("/class")
    public List<newClass> printClass(){
        if(classService.getStatus()== true)
            return classService.getResult();
        else
            return null;
    }

    @PostMapping("/classCheck")
    public void getUser_class(@RequestBody List<User_class> uclass) {
        System.out.println("@PostMapping(\"/getUserClass\")");
        classService.saveClass(uclass);
    }

}
