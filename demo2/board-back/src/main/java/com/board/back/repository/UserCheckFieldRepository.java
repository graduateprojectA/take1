package com.board.back.repository;
import com.board.back.model.User_check_field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserCheckFieldRepository extends JpaRepository<User_check_field, Integer>{
}
