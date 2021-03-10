package com.board.back.repository;
import com.board.back.model.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClassRepository extends JpaRepository<Class, Integer> {
    @Query(value="SELECT * from class s WHERE s.student_id = :student_id and s.major_no =:major_no and s.course_id =:course_id group by s.course_id", nativeQuery = true)
    List<Class> printClass();

}
