
package com.board.back.repository;

import com.board.back.model.User_timetable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserTimetableRepository extends JpaRepository<User_timetable, Integer> {
    @Query(value="SELECT * FROM User_timetable s where s.user_no =:user_no and " +
            "s.class_1 =:class_1 and s.class_2 =:class_2 and s.class_3 =:class_3 and s.class_4 =:class_4 " +
            "and s.class_5 =:class_5 and s.class_6 =:class_6 and s.class_7 =:class_7 and s.class_8 =:class_8 " +
            "and s.class_9 =:class_9", nativeQuery = true)
    List <User_timetable> findCuser_timetable(@Param("user_no")int user_no, @Param("class_1")int class_1,
                                              @Param("class_2")int class_2, @Param("class_3")int class_3,
                                              @Param("class_4")int class_4, @Param("class_5")int class_5,
                                              @Param("class_6")int class_6, @Param("class_7")int class_7,
                                              @Param("class_8")int class_8, @Param("class_9")int class_9);

    @Query(value="SELECT * FROM User_timetable s where s.user_no =:user_no", nativeQuery = true)
    List <User_timetable> findTimetable(@Param("user_no")int user_no);
}