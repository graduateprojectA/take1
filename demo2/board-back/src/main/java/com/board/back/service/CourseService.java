
package com.board.back.service;
import com.board.back.model.*;
import com.board.back.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private CheckFieldRepository checkFieldRepository;
    @Autowired
    private FieldRepository fieldRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private LoginRepository loginRepository;
    @Autowired
    private UserCourseRepository UserCourseRepository;
    @Autowired
    private UserFieldRepository userFieldRepository;
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
        int second_id = full_id % 1000000 / 100000 ;

        setUser_id(first_id*10+second_id); //학번
        setUser_grade(a.get().getGrade()); //학년
        setUser_major(a.get().getMajor()); //전공(숫자)
    }

    //여태 들은 과목 체크박스로 받은 항목들
    // user_course update
    public void updateCourse(List<User_course> uco, int size){

        setUser_no(uco.get(0).getUser_no());
        setUser_id(loginRepository.findUserID(getUser_no()));
        setUser_major(loginRepository.findUserMajor(getUser_no()));
        int first_id = getUser_id() / 1000000;
        int second_id = getUser_id() % 1000000 / 100000 ;
        setUser_id(first_id*10+second_id);

        for(int i=0; i<size; i++){
            UserCourseRepository.executeUpdate(uco.get(i).getCourse_done().booleanValue(),
                    getUser_no(),
                    uco.get(i).getCourse_id());
        }
        List<Integer> trueCourse_id = UserCourseRepository.printTrueCourse(getUser_no());  //여태 들은 수업만 출력
        System.out.println(trueCourse_id);
        updateField(trueCourse_id,trueCourse_id.size(),getUser_id(),getUser_major());//여태 들은 수업만 리스트형으로 보내기
    }

    //user_course에서 받은 학수번호들 credit 확인 후
    //user_field update
    public void updateField(List<Integer> course_id, int size,int id, int major){
        int [][] arr = new int[size][2];  //2차원 배열 {field_no, {field_credit, course_credit}}
        int user_no = getUser_no();
        int student_id = id;
        int major_no = major;

        for(int i=0; i<size; i++){
            int field_no = courseRepository.printField(id,major,course_id.get(i));
            int course_credit = courseRepository.printCredit(id,major,course_id.get(i));
            int field_credit = fieldRepository.printFieldCredit(id,major,field_no);
//            System.out.println(
//                    "course_id: "+course_id.get(i) +"  field_no: "+ field_no
//                            +"  course_credit: "+course_credit +"  field_credit: "+field_credit);
            for (int j=0; j<arr.length; j++){
                if (arr[j][0] != field_no) { //같은 게 아닐 때
                    if (arr[j][0] == 0 && arr[j][1] == 0) { //빈 배열일때
                    arr[j][0] = field_no;
                    arr[j][1] = field_credit;
                    arr[j][1] -= course_credit;
                    break;
                    }
                    else{ //빈 배열이 아닌 다른 값인 경우 패스
                        continue;
                    }
                 }
                else{ //arr[j][0] == field_no
                    arr[j][1] -= course_credit;
                    break;
                }
            }// inner for
        } //outer for


        for(int i=0; i<arr.length; i++){
            if (arr[i][0] == 0 && arr[i][1] == 0) break;
            if (arr[i][1] <= 0) {
//                System.out.println(arr[i][0] + " " + arr[i][1]);
                userFieldRepository.executeUpdate(user_no, arr[i][0]);
            }
        }

        List<Integer> a = userFieldRepository.printTrueField(user_no);
        updateCheckField(a,a.size(),user_no,student_id,major_no);
    }

    public void updateCheckField(List<Integer> ufield, int size, int no, int id, int major) {
        int[][] arr = new int[size][2];  //2차원 배열 {check_field_no, {check_field_credit, field_credit}}
        for (int i = 0; i < size; i++) {
            int check_field_no = fieldRepository.printCheckFieldNo(ufield.get(i));
            int field_credit = fieldRepository.printFieldCredit(id, major, ufield.get(i));
            int check_field_credit = checkFieldRepository.printCheckFieldCredit(id, major, check_field_no);
//            System.out.println("Check_Field_No | field_credit\n"+check_field_no+" "+field_credit);

            for (int j = 0; j < arr.length; j++) {
                if (arr[j][0] != check_field_no) { //같은 게 아닐 때
                    if (arr[j][0] == 0 && arr[j][1] == 0) { //빈 배열일때
                        arr[j][0] = check_field_no;
                        arr[j][1] = check_field_credit;
                        arr[j][1] -= field_credit;
                        break;
                    } else { //빈 배열이 아닌 다른 값인 경우 패스
                        continue;
                    }
                } else { //arr[j][0] == check_field_no
                    arr[j][1] -= field_credit;
                    break;
                }
            }// inner for
        }//outer for

        for (int i = 0; i < arr.length; i++) {
            if (arr[i][0] == 0 && arr[i][1] == 0) break;
            if (arr[i][1] <= 0) {
                userCheckFieldRepository.executeUpdate(user_no, arr[i][0]);
            }
        }
    }}