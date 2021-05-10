package com.board.back.repository;

import com.board.back.model.Majors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MajorRepository extends JpaRepository<Majors, Integer> {
    @Query(value="select major_no from Majors s where s.major_no= :major_no",
            nativeQuery = true)
    Integer findMajorno(@Param("major_no")int major_no);
}
