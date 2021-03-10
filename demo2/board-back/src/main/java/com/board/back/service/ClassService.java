package com.board.back.service;
import com.board.back.model.*;
import com.board.back.model.Class;
import com.board.back.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClassService {
    @Autowired
    private ClassRepository classRepository;
    @Autowired
    private LoginRepository loginRepository;
    @Autowired
    private FieldRepository fieldRepository;
    @Autowired
    private UserCheckFieldRepository userCheckFieldRepository;
    @Autowired
    private UserFieldRepository userFieldRepository;
    @Autowired
    private UserCourseRepository userCourseRepository;

    int user_no = 0;
    int user_id = 0;
    int user_major = 0;
    Boolean status = false;
    List<Class> result;

    public void setUser_no(int a){
        this.user_no = a;
    }
    public void setUser_id(int a){this.user_id = a;}
    public void setUser_major(int a){
        this.user_major = a;
    }
    public void setStatus(boolean a){this.status = a;}
    public void setResult(List<Class> result) {this.result = result;}

    public int getUser_no(){
        return this.user_no;
    }
    public int getUser_id() {return this.user_id;}
    public int getUser_major(){
        return this.user_major;
    }
    public boolean getStatus() {return this.status;}
    public List<Class> getResult() {return this.result;}

    public void getUser(Integer no) {
        setUser_no(no);
        List<User2> us = loginRepository.findAll(); //전체 출력
        Optional <User2> a = loginRepository.findById(no); //해당 user_no에 해당하는 정보만 출력

        int full_id = a.get().getId();
        int first_id = full_id / 1000000;
        int second_id = full_id % 1000000 / 100000 ;

        setUser_id(first_id*10+second_id); //학번
        setUser_major(a.get().getMajor()); //전공(숫자)
        System.out.println(getUser_no()+" "+getUser_id()+" "+ getUser_major());
    }

    public void printClass(int no){
        //print false check_field_no (List형)
        //1,2,3,5,6,7,8
        List<Integer> a = userCheckFieldRepository.printFalseUserCheckField(getUser_no());
        //print field_no 연동 false check_field_no
        //1 2 3 4 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
        List<Integer> b = fieldRepository.printFalseField(a); 
        //print false field_no
        //2 3 4 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
        List<Integer> c = userFieldRepository.printFalseUserField(b,no); //완료되지 않은 field_no만 나옴
        //print field_no 연동 false course_no
        //아직 한 번도 듣지 않은 학수번호 추림
        List<Integer> d =userCourseRepository.printFalseUserCourse(c,no);

        for (int i=0; i<a.size();i++)
            System.out.print(a.get(i)+" ");
        System.out.println();
        for (int i=0; i<b.size();i++)
            System.out.print(b.get(i)+" ");
        System.out.println();
        for (int i=0; i<c.size();i++)
            System.out.print(c.get(i)+" ");
        System.out.println();
        for (int i=0; i<d.size();i++)
            System.out.print(d.get(i)+" ");
        System.out.println(d.size());

        List<Class> e = classRepository.printClass(d);
        for (int i=0; i<e.size();i++)
            System.out.print(e.get(i));
        setStatus(true);
        setResult(e);
        System.out.println(getStatus());
    }

}
