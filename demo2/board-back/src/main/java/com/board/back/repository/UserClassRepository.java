package com.board.back.repository;
import com.board.back.model.User_class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserClassRepository extends JpaRepository<User_class, Integer>{
    @Query(value="select class_no from User_class s where s.user_no= :user_no",
            nativeQuery = true)
    List<Integer> findCnum(@Param("user_no")int user_no);



}
