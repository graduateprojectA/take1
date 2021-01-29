package com.board.back.controller;

import com.board.back.model.Majors;
import com.board.back.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class MajorController {

    @Autowired
    private MajorService majorService;

    @GetMapping("/major/{id}")
    public ResponseEntity<Majors> getMajorId(
            @PathVariable Integer id) {
        return majorService.getMajor(id);
    }

}