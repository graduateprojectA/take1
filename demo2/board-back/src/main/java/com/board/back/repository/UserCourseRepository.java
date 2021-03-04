package com.board.back.repository;
import com.board.back.model.Course;
import com.board.back.model.User_course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserCourseRepository extends JpaRepository<User_course, Integer>{
    @Query(value="SELECT * FROM User_course s WHERE s.user_no = :user_no",
            nativeQuery = true)
    List<User_course> findByUser(@Param("user_no")int user_no);
}
