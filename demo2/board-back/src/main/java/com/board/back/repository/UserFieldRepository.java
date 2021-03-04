package com.board.back.repository;
import com.board.back.model.User_field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserFieldRepository extends JpaRepository<User_field, Integer>{
}
