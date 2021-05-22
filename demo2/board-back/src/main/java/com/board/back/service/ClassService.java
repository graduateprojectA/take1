package com.board.back.service;
import com.board.back.model.*;
import com.board.back.model.Class;
import com.board.back.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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
    private CourseRepository courseRepository;
    @Autowired
    private UserCourseRepository userCourseRepository;
    @Autowired
    private UserClassRepository userClassRepository;

    int user_no = 0;
    int user_id = 0;
    int user_major = 0;
    Boolean status = false;
    List<Class2> result;

    public void setUser_no(int a){
        this.user_no = a;
    }
    public void setUser_id(int a){this.user_id = a;}
    public void setUser_major(int a){
        this.user_major = a;
    }
    public void setStatus(boolean a){this.status = a;}
    public void setResult(List<Class2> result) {this.result = result;}

    public int getUser_no(){
        return this.user_no;
    }
    public int getUser_id() {return this.user_id;}
    public int getUser_major(){
        return this.user_major;
    }
    public boolean getStatus() {return this.status;}
    public List<Class2> getResult() {return this.result;}

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

    public void printClass(int no) {
        //print false check_field_no (List형)
        //1,2,3,5,6,7,8
        List<Integer> a = userCheckFieldRepository.printFalseUserCheckField(getUser_no());
        
        //print field_no 연동 false check_field_no
        //1 2 3 4 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
        List<Integer> b = fieldRepository.printFalseField(a);
        
        //print false field_no, 완료되지 않은 field_no와 field 정보
        //2 3 4 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
        List<Integer> c = userFieldRepository.printFalseUserField(b, no); //완료되지 않은 field 정보 나옴
        List<Field> c_alpha = fieldRepository.printFalseField2(c); //완료되지 않은 field 정보 나옴
        List<Integer> not_c = new ArrayList<>();
        c.clear();
        //"전공"field에 해당하는 field 정보만 출력
        for (int i = 0; i < c_alpha.size(); i++) {
            if (c_alpha.get(i).getField_name().contains("전공")) {
                //System.out.println(c_alpha.get(i));
                c.add(c_alpha.get(i).getField_no());
            }
            else{
                not_c.add(c_alpha.get(i).getField_no());
            }
        }
        
        //print field_no 연동 false course_no
        //아직 한 번도 듣지 않은 전공과목의 학수번호 추림
        List<Integer> d = userCourseRepository.printFalseUserCourse(c, no);

        //아직 한 번도 듣지 않은 교양과목의 학수번호 추림
        List<Integer> not_d = userCourseRepository.printFalseUserCourse(not_c, no);
        //아직 한 번도 듣지 않은 교양과목 그냥 바로 user_class에 저장
        List<Class> not_e = classRepository.printClass(not_d);
        for (int i=0; i<not_e.size(); i++){
            //System.out.println("what is the problem?");
            User_class uce = new User_class(getUser_no(),not_e.get(i).getClass_no(),not_e.get(i).getClass_credit(),false,true);
            //System.out.println("declaration?");
            userClassRepository.save(uce);
            //System.out.println("save?");
        }


//        for (int i = 0; i < a.size(); i++)
//            System.out.print(a.get(i) + " ");
//        System.out.println();
//        for (int i = 0; i < b.size(); i++)
//            System.out.print(b.get(i) + " ");
//        System.out.println();
//        for (int i = 0; i < c.size(); i++)
//            System.out.print(c.get(i) + " ");
//        System.out.println();
//        for (int i = 0; i < not_c.size(); i++)
//            System.out.print(not_c.get(i) + " ");
//        System.out.println();
//        for (int i = 0; i < d.size(); i++)
//            System.out.print(d.get(i) + " ");

        List<Class> e = classRepository.printClass(d);
        List<Class2> final_result = new ArrayList<>();
        for (int i = 0; i < e.size(); i++) {
            Integer field_no = userCourseRepository.getFieldNo(e.get(i).getCourse_id(), getUser_no());
            String course_grade = "";
            List<Integer> course_grade_list = courseRepository.getCourseGrade(e.get(i).getCourse_id());
            course_grade = course_grade_list.toString();
            Class2 tmp = new Class2(
                    e.get(i).getClass_no(),e.get(i).getClass_name(), e.get(i).getCourse_id(),
                    e.get(i).getProfessor_name(), e.get(i).getClass_division(), e.get(i).getClass_time(),course_grade,
                    e.get(i).getClass_credit(), e.get(i).getExam_per(), e.get(i).getQuiz_per(), e.get(i).getPresentation_per(),
                    e.get(i).getProject_per(), e.get(i).getAssignment_per(), e.get(i).getAttendance_per(),
                    e.get(i).getExtra_per(), e.get(i).getMid_plan(), e.get(i).getFinal_plan(),
                    e.get(i).getExtra_plan(), e.get(i).getClass_location(), field_no);
            final_result.add(tmp);
        }//for
        setStatus(true);
        setResult(final_result);
    }

    public void saveClass(List<User_class> uclass){
        for (int i=0; i<uclass.size(); i++) {
            userClassRepository.save(uclass.get(i));
        }}
}