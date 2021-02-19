package com.board.back.service;
import com.board.back.model.User;
import com.board.back.repository.JpaUserRepository;
import com.board.back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.board.back.exception.ResourceNotFoundException;
import com.board.back.util.PagingUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    //private JpaUserRepository JpaUserRepository;

//    // create
//    public User createUser(User user) {
//        return userRepository.save(user);
//    }
}
