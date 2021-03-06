package com.board.back.repository;
import com.board.back.model.Check_field;
import com.board.back.model.Field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;


public interface FieldRepository extends JpaRepository<Field, Integer>{
    @Query(value="SELECT * FROM Field s WHERE s.student_id = :student_id and s.major_no = :major_no",
            nativeQuery = true)
    List<Field> findByIdAndMajor(@Param("student_id")int student_id, @Param("major_no")int major_no);

    @Query(value="SELECT s.field_credit from field s WHERE s.student_id = :student_id and s.major_no =:major_no and s.field_no =:field_no", nativeQuery = true)
    Integer printFieldCredit(@Param("student_id")int student_id,@Param("major_no")int major_no,@Param("field_no")int field_no);

    @Query(value="SELECT s.check_field_no from field s WHERE s.field_no =:field_no", nativeQuery = true)
    Integer printCheckFieldNo(@Param("field_no")int field_no);

    @Query(value="SELECT s.field_no from field s WHERE s.check_field_no in :a", nativeQuery = true)
    List<Integer> printFalseField(@Param("a")List<Integer>a);

    @Query(value="SELECT * from field s WHERE s.field_no in :field_no", nativeQuery = true)
    List<Field> printCFN(@Param("field_no")ArrayList<Integer>field_no);

    @Query(value="SELECT * from field s WHERE s.field_no in :c", nativeQuery = true)
    List<Field> printFalseField2(@Param("c")List<Integer>c);
}