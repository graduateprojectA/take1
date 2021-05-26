package com.board.back.repository;
import com.board.back.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Integer> {
    @Query(value="select * from Course s where s.student_id = :student_id and s.major_no = :major_no group by s.course_id",
            nativeQuery = true)
    List<Course> findByIdAndMajor(@Param("student_id")int student_id, @Param("major_no")int major_no);

    @Query(value="SELECT s.course_credit from Course s WHERE s.student_id = :student_id and s.major_no =:major_no and s.course_id =:course_id group by s.course_id", nativeQuery = true)
    Integer printCredit(@Param("student_id")int student_id,@Param("major_no")int major_no,@Param("course_id")int course_id);

    @Query(value="SELECT s.field_no from Course s WHERE s.student_id = :student_id and s.major_no =:major_no and s.course_id =:course_id group by s.course_id", nativeQuery = true)
    Integer printField(@Param("student_id")int student_id,@Param("major_no")int major_no,@Param("course_id")int course_id);

    @Query(value="select * from Course s where s.course_id in :course_id group by s.course_id",
            nativeQuery = true)
    List<Course> findCF(@Param("course_id")List<Integer>course_id);

    @Query(value="SELECT distinct s.course_grade from Course s where s.course_id =:course_id", nativeQuery = true)
    List<Integer> getCourseGrade (@Param("course_id") int course_id);
}
