package com.board.back.repository;
import com.board.back.model.Class_elective;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClassElectiveRepository extends JpaRepository<Class_elective, Integer>{
    @Query(value="SELECT * FROM Class_elective", nativeQuery = true)
    List<Class_elective> findCelective();
}