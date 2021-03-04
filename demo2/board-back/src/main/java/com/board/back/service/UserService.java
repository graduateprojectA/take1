package com.board.back.service;
import com.board.back.exception.ResourceNotFoundException;
import com.board.back.model.Course;
import com.board.back.model.User;
import com.board.back.model.User_course;
import com.board.back.repository.CourseRepository;
import com.board.back.repository.UserCourseRepository;
import com.board.back.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserCourseRepository UserCourseRepository;
    @Autowired
    private CourseRepository courseRepository;

    // create
    public void createUser(User user) {
        //User 정보 저장
        userRepository.save(user);

        //User 학번만 split ex)18,20
        int full_id = user.getId();
        int first_id = full_id / 1000000;
        int second_id = full_id % 1000000 / 100000;
        full_id = first_id*10+second_id;

        //해당 User 전공 및 학번에 맞는 커리큘럼 미리 저장
        List<Course> a = courseRepository.findByIdAndMajor(full_id,user.getMajor());

        for(int i=0; i<a.size(); i++){
            User_course uco = new User_course();
            uco.setUser_no(user.getNo());
            uco.setField_no(a.get(i).getField_no());
            uco.setCourse_no(a.get(i).getCourse_no());
            uco.setCourse_done(false);
            System.out.println(uco);
//            System.out.println("user:"+uco.getUser_no()+"field_no:"+uco.getField_no()+"course_no:"+uco.getCourse_no()
//            +"course_done:"+uco.getCourse_done());
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