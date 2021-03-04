package com.board.back.repository;
import com.board.back.model.Course;
import com.board.back.model.User_course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserCourseRepository extends JpaRepository<User_course, Integer>{
    @Query(value="SELECT * FROM Course s WHERE s.student_id = :student_id and s.major_no = :major_no group by s.course_id",
            nativeQuery = true)
    List<Course> findByIdAndMajor(@Param("student_id")int student_id, @Param("major_no")int major_no);
}
