package com.board.back.repository;
import com.board.back.model.Check_field;
import com.board.back.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CheckFieldRepository extends JpaRepository<Check_field, Integer>{
    @Query(value="SELECT * FROM Check_field s WHERE s.student_id = :student_id and s.major_no = :major_no",
            nativeQuery = true)
    List<Check_field> findByIdAndMajor(@Param("student_id")int student_id, @Param("major_no")int major_no);

    @Query(value="SELECT s.check_field_credit from check_field s WHERE s.student_id = :student_id and s.major_no =:major_no and s.check_field_no =:check_field_no", nativeQuery = true)
    Integer printCheckFieldCredit(@Param("student_id")int student_id,@Param("major_no")int major_no,@Param("check_field_no")int check_field_no);
}
