package com.board.back.repository;
import com.board.back.model.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClassRepository extends JpaRepository<Class, Integer> {
    @Query(value="SELECT * from Class s where course_id in :d", nativeQuery = true)
    List<Class> printClass(@Param("d")List<Integer>d);

    @Query(value="SELECT course_id from Class s where s.course_id in :d group by s.course_id", nativeQuery = true)
    List<Integer> printClassCourseId(@Param("d")List<Integer>d);

    @Query(value="SELECT class_time from Class s where s.class_no in :d", nativeQuery = true)
    List<Integer> findCtime(@Param("d")List<Integer>d);

    @Query(value="select course_id from Class s where s.class_no in :class_no",
            nativeQuery = true)
    List<Integer> findCCID(@Param("class_no")List<Integer>class_no);

    @Query(value="SELECT * from Class s where s.class_no =:class_no", nativeQuery=true)
    Class findClass(@Param("class_no")int class_no);

    @Query(value="select class_credit from Class s where s.class_no in :class_no",
            nativeQuery = true)
    List<Integer> findCcredit(@Param("class_no")List<Integer>class_no);

}