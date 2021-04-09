package com.board.back.repository;
import com.board.back.model.User_class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserClassRepository extends JpaRepository<User_class, Integer>{
}
