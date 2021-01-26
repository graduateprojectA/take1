package com.example.demo.service;
import java.util.List;

import com.example.demo.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Board;
import com.example.demo.repository.JpaBoardRepository;

import javax.transaction.Transactional;

@Service
public class BoardService {
    @Autowired
    private final BoardRepository boardRepository;
    public BoardService(BoardRepository boardRepository){
        this.boardRepository=boardRepository;
    }


    public List<Board> getAllBoard() {
        System.out.println("성공입니다.");
        return boardRepository.findAll();
    }
}
