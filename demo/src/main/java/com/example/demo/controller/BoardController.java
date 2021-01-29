package com.example.demo.controller;
import java.util.List;

import com.example.demo.domain.Majors;
import com.example.demo.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.Board;
import com.example.demo.service.BoardService;
@RestController
@RequestMapping("/api")
public class BoardController {
    @Autowired
    private BoardService boardService;
    @Autowired
    private MajorService majorService;

    @GetMapping("/board")
    public List<Board> getAllBoards() {
        return boardService.getAllBoard();
    }
    @GetMapping("/majors")
    public List<Majors> getAllMajors() {
        return majorService.getAllMajor();
    }
}
