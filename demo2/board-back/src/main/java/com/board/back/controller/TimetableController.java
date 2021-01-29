package com.board.back.controller;

import com.board.back.model.Majors;
import com.board.back.service.TimetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
@Controller
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
        return "majors/majorList";
    }
}
