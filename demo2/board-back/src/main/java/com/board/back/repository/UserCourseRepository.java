package com.board.back.repository;
import com.board.back.model.User_course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserCourseRepository extends JpaRepository<User_course, Integer>{
}
