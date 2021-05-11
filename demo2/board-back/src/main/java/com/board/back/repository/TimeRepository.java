package com.board.back.repository;

import com.board.back.model.User_time;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TimeRepository extends JpaRepository<User_time, Integer>{
    @Query(value="select time_mon from User_time s where s.user_no= :user_no",
            nativeQuery = true)
    Integer findMon(@Param("user_no")int user_no);

    @Query(value="select time_tue from User_time s where s.user_no= :user_no",
            nativeQuery = true)
    Integer findTue(@Param("user_no")int user_no);

    @Query(value="select time_wed from User_time s where s.user_no= :user_no",
            nativeQuery = true)
    Integer findWed(@Param("user_no")int user_no);

    @Query(value="select time_thr from User_time s where s.user_no= :user_no",
            nativeQuery = true)
    Integer findThr(@Param("user_no")int user_no);

    @Query(value="select time_fri from User_time s where s.user_no= :user_no",
            nativeQuery = true)
    Integer findFri(@Param("user_no")int user_no);
}
