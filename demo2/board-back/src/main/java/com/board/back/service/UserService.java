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

    // login (React에서 로그인 버튼을 눌렀을 때 넘어온 정보: 학번, pw  ==  User)
    public User loginUser(User user) {
       Integer user_id = user.getId();
       String user_pw = user.getPassword();
       User check = userRepository.findById(user_id)
               .orElseThrow(() -> new ResourceNotFoundException("Not exist User Data by no : ["+user_id+"]"));

        public Optional<User> findById(Integer user_id) {
            Optional<User> member = userRepository.findById(user_id); return user; }

    }




}
