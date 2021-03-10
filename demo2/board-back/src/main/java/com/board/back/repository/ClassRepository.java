package com.board.back.repository;
import com.board.back.model.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClassRepository extends JpaRepository<Class, Integer> {
    @Query(value="SELECT * from class s where course_id in :d", nativeQuery = true)
    List<Class> printClass(@Param("d")List<Integer>d);
}

