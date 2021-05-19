package com.board.back.repository;

import com.board.back.model.User_elective_timetable;
import com.board.back.model.User_timetable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserElectiveTimetableRepository extends JpaRepository<User_elective_timetable, Integer> {
    @Query(value="SELECT class_no FROM User_elective_timetable s where s.timetable_number =:timetable_no", nativeQuery = true)
    List<Integer> findClassId(@Param("timetable_no")int timetable_no);

    @Query(value="SELECT timetable_number FROM User_elective_timetable s where s.user_no =:user_no group by timetable_number", nativeQuery = true)
    List<Integer> findTimetableNo(@Param("user_no")int user_no);
}