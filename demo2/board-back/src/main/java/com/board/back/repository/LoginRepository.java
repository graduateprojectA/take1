package com.board.back.repository;
import com.board.back.model.User2;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<User2, Integer> {
}