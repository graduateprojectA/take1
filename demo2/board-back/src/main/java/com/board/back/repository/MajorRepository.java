package com.board.back.repository;

import com.board.back.model.Majors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MajorRepository extends JpaRepository<Majors, Integer> {
    @Query("SELECT mb FROM Majors mb WHERE mb.id = :id")
    List<Majors> findByUserId(@Param("id") String id);
}
