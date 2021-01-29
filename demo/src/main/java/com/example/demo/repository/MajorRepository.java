package com.example.demo.repository;

import com.example.demo.domain.Board;
import com.example.demo.domain.Majors;

import java.util.List;

public interface MajorRepository {
    List<Majors> findAll();
}
