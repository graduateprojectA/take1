package com.board.back.controller;
import com.board.back.model.Course;
import com.board.back.model.User_course;
import com.board.back.repository.CourseRepository;
import com.board.back.repository.UserCourseRepository;
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
    private UserCourseRepository UserCourseRepository;

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
    public List<User_course> returnCourse(){
        if(courseService.getUser_no() != 0) {
            int no = courseService.getUser_no();
            //List<Course> a = courseRepository.findAll();
            //System.out.println(courseRepository.findByIdAndMajor(id,major));
            return UserCourseRepository.findByUser(no);
        }
        else {
            System.out.println("FAIL");
            return null;
        }
    }
    @PostMapping("/courseCheck")
    public void updateCourse(@RequestBody List<User_course> uco) {
        System.out.println("@PostMapping(\"/courseCheck\")");
        System.out.println(uco.toString());
        courseService.updateCourse(uco,uco.size());
    }
}
