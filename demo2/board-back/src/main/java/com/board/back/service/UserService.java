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

    public int findAllCount() {
        return (int) userRepository.count();
    }

    // get data
    public ResponseEntity<Map> getPagingUser(Integer p_num) {
        Map result = null;

        PagingUtil pu = new PagingUtil(p_num, 5, 5); // ($1:표시할 현재 페이지, $2:한페이지에 표시할 글 수, $3:한 페이지에 표시할 페이지 버튼의 수 )
        List<User> list = userRepository.findFromTo(pu.getObjectStartNum(), pu.getObjectCountPerPage());
        pu.setObjectCountTotal(findAllCount());
        pu.setCalcForPaging();

        System.out.println("p_num : "+p_num);
        System.out.println(pu.toString());

        if (list == null || list.size() == 0) {
            return null;
        }

        result = new HashMap<>();
        result.put("pagingData", pu);
        result.put("list", list);

        return ResponseEntity.ok(result);
    }

    // get users data
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

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

    // update
    public ResponseEntity<User> updateUser(
            Integer user_no, User updatedUser) {
        User user = userRepository.findById(user_no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist User Data by no : ["+user_no+"]"));
        user.setId(updatedUser.getId());
        user.setPassword(updatedUser.getPassword());
        user.setMajor(updatedUser.getMajor());
        user.setGrade(updatedUser.getGrade());

        User endUpdatedBoard = userRepository.save(user);
        return ResponseEntity.ok(endUpdatedBoard);
    }

    // delete board
    public ResponseEntity<Map<String, Boolean>> deleteUser(
            Integer user_no) {
        User user = userRepository.findById(user_no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist User Data by no : ["+user_no+"]"));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted User Data by id : ["+user_no+"]", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
