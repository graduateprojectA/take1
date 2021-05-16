package com.board.back.controller;

import com.board.back.service.TimetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.CriteriaBuilder;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class TimetableController {
    @Autowired
    private TimetableService timetableService;
    @Autowired
    public TimetableController(TimetableService timetableService) {
        this.timetableService = timetableService;
    }

    
    //Timetable maker => timetable db 저장
    public void getUser(int user_no) {
        Integer u = user_no;
        timetableService.setUser_no(user_no);
        timetableService.getTime(u);
        timetableService.getUser_class(u);
    }
}
