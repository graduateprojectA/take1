package com.board.back.repository;

import com.board.back.model.User_elective_timetable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserElectiveTimetableRepository extends JpaRepository<User_elective_timetable, Integer> {
<<<<<<< HEAD
    @Query(value="INSERT INTO user_elective_timetable(timetable_number, class_no, user_no) VALUES(:user_timetable_no,:class_no,:user_no)", nativeQuery=true)
    void liberalArts(@Param("user_timetable_no")int user_timetable_no, @Param("class_no")int class_no, @Param("user_no")int user_no);
=======
>>>>>>> main
}