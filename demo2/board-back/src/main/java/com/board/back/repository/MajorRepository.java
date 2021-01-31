package com.board.back.repository;

import com.board.back.model.Majors;
import com.board.back.model.User;
import com.board.back.model.User1_dropmajor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface MajorRepository  {
    List<Majors> findByRT(int recommend_time);
    List<Majors> findAll();
    List<User> findNoTime();
    List<User1_dropmajor> findNoThing();
}
