package com.board.back.repository;
import com.board.back.model.User2;
import com.board.back.model.User_course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LoginRepository extends JpaRepository<User2, Integer> {
    @Query(value="SELECT user_id FROM User s WHERE s.user_no = :user_no",
            nativeQuery = true)
    int findUserID(@Param("user_no")int user_no);

    @Query(value="SELECT user_major FROM User s WHERE s.user_no = :user_no",
            nativeQuery = true)
    int findUserMajor(@Param("user_no")int user_no);
}