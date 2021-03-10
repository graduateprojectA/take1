package com.board.back.service;
import com.board.back.model.*;
import com.board.back.model.Class;
import com.board.back.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import sun.reflect.generics.repository.ClassRepository;

import java.util.List;
import java.util.Optional;

public class ClassService {
    @Autowired
    private ClassRepository classRepository;
    @Autowired
    private LoginRepository loginRepository;
    @Autowired
    private UserCheckFieldRepository userCheckFieldRepository;


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

    public int getUser_no(){
        return this.user_no;
    }
    public int getUser_id() {return this.user_id;}
    public int getUser_major(){
        return this.user_major;
    }

    public void getUser(Integer no) {
        setUser_no(no);
        List<User2> us = loginRepository.findAll(); //전체 출력
        Optional <User2> a = loginRepository.findById(no); //해당 user_no에 해당하는 정보만 출력

        int full_id = a.get().getId();
        int first_id = full_id / 1000000;
        int second_id = full_id % 1000000 / 100000 ;

        setUser_id(first_id*10+second_id); //학번
        setUser_major(a.get().getMajor()); //전공(숫자)
    }

//    public List<Class> printClass(){
//        List<Integer> a = userCheckFieldRepository.printFalseUserCheckField(getUser_no()); //1,2,3,5,6,7,8
//        return classRepository.printClass();
//    }
}
