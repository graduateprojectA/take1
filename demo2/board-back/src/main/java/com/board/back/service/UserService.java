package com.board.back.service;

import com.board.back.exception.ResourceNotFoundException;
import com.board.back.model.*;
import com.board.back.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private CheckFieldRepository checkFieldRepository;
    @Autowired
    private FieldRepository fieldRepository;

    @Autowired
    private UserCourseRepository UserCourseRepository;
    @Autowired
    private UserCheckFieldRepository userCheckFieldRepository;
    @Autowired
    private UserFieldRepository userFieldRepository;

    // create
    public void createUser(User user) {
        //User 정보 저장
        userRepository.save(user);

        //User 학번만 split ex)18,20
        int full_id = user.getId();
        int first_id = full_id / 1000000;
        int second_id = full_id % 1000000 / 100000;
        full_id = first_id * 10 + second_id;

        //해당 User 전공 및 학번에 맞는 커리큘럼 미리 저장
        List<Check_field> a = checkFieldRepository.findByIdAndMajor(full_id, user.getMajor());
        List<Field> b = fieldRepository.findByIdAndMajor(full_id, user.getMajor());
        List<Course> c = courseRepository.findByIdAndMajor(full_id, user.getMajor());

        for (int i = 0; i < a.size(); i++) {
            User_check_field checkfield = new User_check_field(user.getNo(), a.get(i).getCheck_field_no(),
                    false);
            userCheckFieldRepository.save(checkfield);
        }

        for (int i=0; i<b.size(); i++){
            User_field field = new User_field(user.getNo(),b.get(i).getField_no(),false);
            userFieldRepository.save(field);
        }

        for (int i = 0; i < c.size(); i++) {
            User_course uco = new User_course(user.getNo(), c.get(i).getField_no(), c.get(i).getCourse_no(),
                    c.get(i).getCourse_id(), c.get(i).getCourse_name(), false);
//            uco.setUser_no(user.getNo());
//            uco.setField_no(a.get(i).getField_no());
//            uco.setCourse_no(a.get(i).getCourse_no());
//            uco.setCourse_id(a.get(i).getCourse_id());
//            uco.setCourse_name(a.get(i).getCourse_name());
//            uco.setCourse_done(false);
//            System.out.println(uco);
            UserCourseRepository.save(uco);
        }
    }

    // get user one by id
    public ResponseEntity<User> getUser(Integer user_no) {
        User user = userRepository.findById(user_no)
                .orElseThrow(() -> new ResourceNotFoundException("Not exist User Data by no : ["+user_no+"]"));
        return ResponseEntity.ok(user);
    }
}