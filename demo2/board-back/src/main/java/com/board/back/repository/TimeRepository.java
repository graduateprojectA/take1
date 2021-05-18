package com.board.back.repository;

import com.board.back.model.User_time;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TimeRepository extends JpaRepository<User_time, Integer>{
    //ex) 1110010
    @Query(value="SELECT time_mon from User_time s where s.user_no= :user_no",
            nativeQuery = true)
    int findMon(@Param("user_no")int user_no);

    @Query(value="SELECT time_tue from User_time s where s.user_no= :user_no",
            nativeQuery = true)
    int findTue(@Param("user_no")int user_no);

    @Query(value="SELECT time_wed from User_time s where s.user_no= :user_no",
            nativeQuery = true)
    int findWed(@Param("user_no")int user_no);

    @Query(value="SELECT time_thr from User_time s where s.user_no= :user_no",
            nativeQuery = true)
    int findThr(@Param("user_no")int user_no);

    @Query(value="SELECT time_fri from User_time s where s.user_no= :user_no",
            nativeQuery = true)
    int findFri(@Param("user_no")int user_no);
}
