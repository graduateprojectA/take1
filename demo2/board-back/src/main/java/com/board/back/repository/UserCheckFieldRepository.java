package com.board.back.repository;
import com.board.back.model.User_check_field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface UserCheckFieldRepository extends JpaRepository<User_check_field, Integer>{

    @Transactional
    @Modifying
    @Query(value="UPDATE User_check_field s SET s.check_field_done = true WHERE s.user_no =:user_no and s.check_field_no =:check_field_no", nativeQuery = true)
    void executeUpdate(@Param("user_no")int user_no, @Param("check_field_no")int check_field_no);


}
