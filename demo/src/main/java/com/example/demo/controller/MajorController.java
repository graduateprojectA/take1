package com.example.demo.controller;

import com.example.demo.domain.Majors;
import com.example.demo.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class MajorController {
    private final MajorService majorService;
    @Autowired
    public MajorController(MajorService majorService) {
        this.majorService = majorService;
    }
    @GetMapping(value = "/majors")
    public String list(Model model) {
        List<Majors> majors= majorService.getAllMajor();
        model.addAttribute("majors", majors);
        return "majors/majorList";
    }

}