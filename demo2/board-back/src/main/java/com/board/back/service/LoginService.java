package com.board.back.service;

import com.board.back.model.User;
import com.board.back.model.User2;
import com.board.back.repository.LoginRepository;
import com.board.back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;
    public List<User2> getAllUser() {
        return loginRepository.findAll();
    }

}
