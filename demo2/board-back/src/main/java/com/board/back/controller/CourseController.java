package com.board.back.controller;
<<<<<<< HEAD

import com.board.back.model.Course;
=======
import com.board.back.model.Course;
import com.board.back.model.User;
import com.board.back.model.User2;
import com.board.back.model.User_class;
import com.board.back.repository.CourseRepository;
>>>>>>> seoyeong
import com.board.back.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> seoyeong
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
    public void getUser(@RequestBody Integer id){
        System.out.println("@PostMapping(\"/getUser\")");
        courseService.getUser(id);
    }

    @GetMapping("/course")
    public List<Course> returnCourse(){
        if(courseService.getUser_no() != 0) {
            int id = courseService.getUser_id();
            int major = courseService.getUser_major();
            //List<Course> a = courseRepository.findAll();
            System.out.println("SUCCESS");
            //System.out.println(courseRepository.findByIdAndMajor(id,major));
            return courseRepository.findByIdAndMajor(id,major);
        }
        else {
            System.out.println("FAIL");
            return null;
        }
    }

//    @PostMapping("/courseCheck")
//    public Course createCourse(@RequestBody Course course) {
//        System.out.println("@PostMapping(\"/course\")");
//        System.out.println(course.toString());
//        return courseService.createCourse(course);
//    }
}









/*
 * @PostMapping("/student") public void createStudent(@RequestBody Student
 * student) { System.out.println("@PostMapping(\"/student\")");
 * System.out.println(student.toString()); }
 *
 * @PostMapping("/board") public void createBoard(@RequestBody Board board) {
 * System.out.println("@PostMapping(\"/board\")");
 * System.out.println(board.toString()); }
 *
 * @PostMapping("/user") public User createUser(@RequestBody User user) {
 * System.out.println("@PostMapping(\"/user\")");
 * System.out.println(user.toString()); return userService.createUser(user); }
 *
 * @GetMapping("/board/{no}") public ResponseEntity<Board> getBoardByNo(
 *
 * @PathVariable Integer no) {
 *
 * return boardService.getBoard(no); }
 */