package com.board.back.repository;

import com.board.back.model.User_elective_timetable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserElectiveTimetableRepository extends JpaRepository<User_elective_timetable, Integer> {
}