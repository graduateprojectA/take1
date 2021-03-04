package com.board.back.repository;
import com.board.back.model.Check_field;
import com.board.back.model.Field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface FieldRepository extends JpaRepository<Field, Integer>{
    @Query(value="SELECT * FROM Field s WHERE s.student_id = :student_id and s.major_no = :major_no",
            nativeQuery = true)
    List<Field> findByIdAndMajor(@Param("student_id")int student_id, @Param("major_no")int major_no);
}