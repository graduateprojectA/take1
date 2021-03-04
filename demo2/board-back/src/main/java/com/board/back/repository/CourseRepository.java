package com.board.back.repository;
import com.board.back.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Integer> {

<<<<<<< HEAD
    @Query(value="SELECT * FROM Course s WHERE s.student_id = :student_id and s.major_no = :major_no group by s.course_id",
=======
    @Query(value="select * from Course s where s.student_id = :student_id and s.major_no = :major_no group by s.course_no",
>>>>>>> jpaspring
            nativeQuery = true)
    List<Course> findByIdAndMajor(@Param("student_id")int student_id, @Param("major_no")int major_no);
}

//    where s.student_id = ?1 and s.major_no = ?1