package com.board.back.controller;

import com.board.back.model.Course;
import com.board.back.service.CourseService;
import com.board.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseService courseService;
    @Autowired
    private UserService userService;

    @PostMapping("/course")
    public Course createCourse(@RequestBody Course course) {
        System.out.println("@PostMapping(\"/course\")");
        System.out.println(course.toString());
        return courseService.createCourse(course);
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
}
