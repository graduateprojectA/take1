package com.board.back.repository;
import com.board.back.model.User_field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface UserFieldRepository extends JpaRepository<User_field, Integer>{
    @Transactional
    @Modifying
    @Query(value="UPDATE User_field s SET s.field_done = true WHERE s.user_no =:user_no and s.field_no =:field_no", nativeQuery = true)
    void executeUpdate(@Param("user_no")int user_no, @Param("field_no")int field_no);

    @Query(value="SELECT field_no from user_field s WHERE s.user_no = :user_no and s.field_done =true", nativeQuery = true)
    List<Integer> printTrueField(@Param("user_no")int user_no);

    @Query(value="SELECT field_no from user_field s WHERE s.field_no in :b and field_done = 0 and s.user_no =:user_no", nativeQuery = true)
    List<Integer> printFalseUserField(@Param("b")List<Integer>b,@Param("user_no")int user_no);
}
