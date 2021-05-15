package com.board.back.repository;
import com.board.back.model.User_preference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserPreferenceRepository extends JpaRepository<User_preference, Integer>{
    @Query(value="SELECT * FROM User_preference s WHERE s.user_no =:user_no", nativeQuery = true)
    User_preference findCpreference(@Param("user_no")int user_no);
}