package com.board.back.controller;

import com.board.back.service.TimetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        timetableService.getTime(user_no);
        timetableService.getUser_class(user_no);
        //timetableService.getTime(u);
        //timetableService.getUser_class(u);
    }


    //Timetable maker => timetable db 저장
//    @PostMapping("/timetableUser")
//    public void getUser(@RequestBody int user_no) {
//        Integer u = user_no;
//        timetableService.setUser_no(user_no);
//        timetableService.getTime(user_no);
//        timetableService.getUser_class(user_no);
//        System.out.println("h5");
//
////        timetableService.setUser_no(user_no);
////        timetableService.getTime(u);
////        timetableService.getUser_class(u);
//        System.out.println("h5");
//
//    }
}
