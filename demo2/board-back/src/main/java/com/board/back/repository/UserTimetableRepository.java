package com.board.back.repository;

import com.board.back.model.User_timetable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserTimetableRepository extends JpaRepository<User_timetable, Integer> {
}
