package com.board.back.controller;

import com.board.back.model.Majors;
import com.board.back.service.TimetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TimetableController {
    private final TimetableService timetableService;
    @Autowired
    public TimetableController(TimetableService timetableService) {
        this.timetableService = timetableService;
    }
    @GetMapping(value = "/timetable")
    public String list(Model model) {
        List<Majors> majors= timetableService.findMajor();
        model.addAttribute("majors", majors);
        return "hello";
    }
}
