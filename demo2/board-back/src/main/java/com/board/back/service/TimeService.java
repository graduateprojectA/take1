package com.board.back.service;

import com.board.back.model.User_time;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.board.back.repository.TimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class TimeService {

    @Autowired
    private TimeRepository timeRepository;

    //create
    public void excludeTime (User_time user_time){
        int user_no = user_time.getUser_no();
        System.out.println(user_no);
    }
}
