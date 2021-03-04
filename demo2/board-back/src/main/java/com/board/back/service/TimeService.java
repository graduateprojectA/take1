package com.board.back.service;

import com.board.back.model.User_time;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.board.back.repository.TimeRepository;

@Service
public class TimeService {

    @Autowired
    private TimeRepository timeRepository;

    // create
    public User_time excludeTime(User_time user_time) {
        String user = user_time.toString();
        System.out.println(user);
        return timeRepository.save(user_time);
    }
}
