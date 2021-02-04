package com.example.demo.repository;

import com.example.demo.domain.Board;

import java.util.List;

public interface BoardRepository {
    List<Board> findAll();
}
