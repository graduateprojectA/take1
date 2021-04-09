package com.board.back.repository;
import com.board.back.model.User_preference;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserPreferenceRepository extends JpaRepository<User_preference, Integer>{
}
