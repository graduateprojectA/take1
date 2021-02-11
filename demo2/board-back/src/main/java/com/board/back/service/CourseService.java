package com.board.back.service;

import com.board.back.model.Course;
import com.board.back.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;
    // create board
    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }
}
