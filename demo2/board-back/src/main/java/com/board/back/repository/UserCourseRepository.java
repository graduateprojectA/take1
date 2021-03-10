package com.board.back.repository;
import com.board.back.model.User_course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface UserCourseRepository extends JpaRepository<User_course, Integer>{
    @Query(value="SELECT * FROM User_course s WHERE s.user_no = :user_no",
            nativeQuery = true)
    List<User_course> findByUser(@Param("user_no")int user_no);

    @Transactional
    @Modifying
    @Query(value="UPDATE User_course s SET s.course_done =:course_done WHERE s.user_no = :user_no and s.course_id =:course_id", nativeQuery = true)
    void executeUpdate(@Param("course_done")Boolean course_done,@Param("user_no")int user_no,@Param("course_id")int course_id);


    @Query(value="SELECT s.course_id from User_course s WHERE s.user_no = :user_no and s.course_done = true;",
            nativeQuery = true)
    List<Integer> printTrueCourse(@Param("user_no")int user_no);

    @Query(value="SELECT course_id from user_course s WHERE s.field_no in :c and course_done = 0 and s.user_no =:user_no", nativeQuery = true)
    List<Integer> printFalseUserCourse(@Param("c")List<Integer>c,@Param("user_no")int user_no);

}
