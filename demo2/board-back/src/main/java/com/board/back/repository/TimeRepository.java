package com.board.back.repository;
import com.board.back.model.User_time;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeRepository extends JpaRepository<User_time, Integer>{
}
