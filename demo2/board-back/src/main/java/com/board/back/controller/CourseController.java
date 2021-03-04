package com.board.back.controller;
<<<<<<< HEAD
import com.board.back.model.Course;
import com.board.back.model.User_course;
import com.board.back.repository.CourseRepository;
import com.board.back.repository.UserCourseRepository;
=======

import com.board.back.model.Course;
import com.board.back.repository.CourseRepository;
>>>>>>> jpaspring
import com.board.back.service.CourseService;
import com.board.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
<<<<<<< HEAD
=======

>>>>>>> jpaspring
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
<<<<<<< HEAD
    public List<User_course> returnCourse(){
        if(courseService.getUser_no() != 0) {
            int no = courseService.getUser_no();
            //List<Course> a = courseRepository.findAll();
            //System.out.println(courseRepository.findByIdAndMajor(id,major));
            return UserCourseRepository.findByUser(no);
        }
        else {
=======
    public List<Course> returnCourse() {
        if (courseService.getUser_no() != 0) {
            int id = courseService.getUser_id();
            int major = courseService.getUser_major();
            List<Course> a = courseRepository.findAll();
            System.out.printf("%d, %d",id,major);
            System.out.println(courseRepository.findByIdAndMajor(id,major));
            return courseRepository.findByIdAndMajor(id, major);
        } else {
>>>>>>> jpaspring
            System.out.println("FAIL");
            return null;
        }
    }
<<<<<<< HEAD

//    @PostMapping("/courseCheck")
//    public void createCourse(@RequestBody List<User_course> uco) {
//        System.out.println("@PostMapping(\"/course\")");
//        System.out.println(uco.toString());
//        courseService.createCourse(uco, uco.size());
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
=======
}
>>>>>>> jpaspring
