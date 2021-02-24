package com.board.back.service;
import com.board.back.exception.ResourceNotFoundException;
import com.board.back.model.User;
import com.board.back.repository.UserRepository;
import com.board.back.util.PagingUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // create
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // get user one by id
    public ResponseEntity<User> getUser(Integer user_no) {
        User user = userRepository.findById(user_no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist User Data by no : ["+user_no+"]"));
        return ResponseEntity.ok(user);
    }
}