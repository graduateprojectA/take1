package com.board.back.repository;

import com.board.back.model.Majors;
import com.board.back.model.User;
import com.board.back.model.User1_dropmajor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MajorRepository  {
    @Query("SELECT mb FROM Majors mb WHERE mb.id = :id")
    List<Majors> findByUserId(@Param("id") String id);
    Optional<Majors> findMajor(String major_name, int major_number, int division_number);
    List<Majors> findByRT(int recommend_time);
    List<Majors> findAll();
    List<User> findNoTime();
    List<User1_dropmajor> findNoThing();
}
