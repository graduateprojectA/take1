package com.board.back.service;
import com.board.back.model.Course;
import com.board.back.model.User;
import com.board.back.model.User2;
import com.board.back.model.User_class;
import com.board.back.repository.LoginRepository;
import com.board.back.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private LoginRepository loginRepository;

    int user_no = 0;
    int user_id = 0;
    int user_major = 0;
    int user_grade = 0;

    public void setUser_no(int a){
        this.user_no = a;
    }
    public void setUser_id(int a){this.user_id = a;}
    public void setUser_major(int a){
        this.user_major = a;
    }
    public void setUser_grade(int a){
        this.user_grade = a;
    }

    public int getUser_no(){
        return this.user_no;
    }
    public int getUser_id() {return this.user_id;}
    public int getUser_major(){
        return this.user_major;
    }
    public int getUser_grade(){
        return this.user_grade;
    }



    public void getUser(Integer no) {
        setUser_no(no);
        List<User2> us = loginRepository.findAll(); //전체 출력
        Optional <User2> a = loginRepository.findById(no); //해당 user_no에 해당하는 정보만 출력
        System.out.println(us); 
        System.out.println(a);

        int full_id = a.get().getId();
        int first_id = full_id / 1000000;
        int second_id = full_id % 1000000;

        setUser_id(first_id*10+second_id);
        setUser_grade(a.get().getGrade());
        setUser_major(a.get().getMajor());
    }

    }

