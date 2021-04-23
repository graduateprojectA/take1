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
}