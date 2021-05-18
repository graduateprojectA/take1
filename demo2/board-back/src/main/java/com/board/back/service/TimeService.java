package com.board.back.service;

import com.board.back.model.*;
import com.board.back.model.Class;
import com.board.back.repository.ClassRepository;
import com.board.back.repository.UserElectiveTimetableRepository;
import com.board.back.repository.UserTimetableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.board.back.repository.TimeRepository;

import java.util.*;

@Service
public class TimeService {
    @Autowired
    private TimeRepository timeRepository;
    @Autowired
    private UserTimetableRepository userTimetableRepository;
    @Autowired
    private ClassRepository classRepository;
    @Autowired
    private UserElectiveTimetableRepository userElectiveTimetableRepository;

    int user_no = 0;
    public int getUser_no() {
        return user_no;
    }
    public void setUser_no(int user_no) {
        this.user_no = user_no;
    }

    //user_timetable2
    List <User_timetable2> timetable = new ArrayList<>();
    Class Class_1;
    Class Class_2;
    Class Class_3;
    Class Class_4;
    Class Class_5;
    Class Class_6;
    Class Class_7;
    Class Class_8;
    Class Class_9;

    //user_elective_timetable
    List <Class> class_elect = new ArrayList<>();

    // create
    public User_time excludeTime(User_time user_time) {
        String user = user_time.toString();
        System.out.println(user);
        return timeRepository.save(user_time);
    }

    public void setTimetable(int user_no) {
        //뽑힌 timetable 모두 가져오기
        List<User_timetable> timetable_org = userTimetableRepository.findTimetable(user_no);

        for (int i = 0; i < timetable_org.size(); i++) {
            //뽑힌 과목들 정보 불러오기
            Class_1 = classRepository.findClass(timetable_org.get(i).getClass_1());
            Class_2 = classRepository.findClass(timetable_org.get(i).getClass_2());
            Class_3 = classRepository.findClass(timetable_org.get(i).getClass_3());
            Class_4 = classRepository.findClass(timetable_org.get(i).getClass_4());
            Class_5 = classRepository.findClass(timetable_org.get(i).getClass_5());
            Class_6 = classRepository.findClass(timetable_org.get(i).getClass_6());
            Class_7 = classRepository.findClass(timetable_org.get(i).getClass_7());
            Class_8 = classRepository.findClass(timetable_org.get(i).getClass_8());
            Class_9 = classRepository.findClass(timetable_org.get(i).getClass_9());

            ArrayList<Class> class_list = new ArrayList<>(Arrays.asList(Class_1, Class_2, Class_3, Class_4, Class_5, Class_6, Class_7, Class_8, Class_9));
            while (class_list.remove(null)) {
            }
            System.out.println(class_list);
            User_timetable2 utimetable = new User_timetable2();
            utimetable.setUser_no(user_no);
            String name = null; //과목명
            int time = 0; //교시
            int day = 0; // 요일
            int hour = 0; // 시간

            for (int j = 0; j < class_list.size(); j++) {
                name = class_list.get(j).getClass_name();
                time = class_list.get(j).getClass_time();

                if (time / 100000 > 0) {
                    day = time / 100000;
                    hour = time % 100000 / 100000;
                    utimetable = addTime(day,hour,name,utimetable);
                    day = time % 10000 / 1000;
                    hour = time % 1000 / 100;
                    utimetable = addTime(day,hour,name,utimetable);
                    day = time % 100 / 10;
                    hour = time % 10;
                    utimetable = addTime(day,hour,name,utimetable);
                } else if (time / 1000 > 0) {
                    day = time / 1000;
                    hour = time % 1000 / 100;
                    utimetable = addTime(day,hour,name,utimetable);
                    day = time % 100 / 10;
                    hour = time % 10;
                    utimetable = addTime(day,hour,name,utimetable);
                } else {
                    day = time / 10;
                    hour = time % 10;
                    utimetable = addTime(day,hour,name,utimetable);
                }
                //System.out.println(day + " " + hour);
            }//2번째 for
            System.out.println(utimetable);
            timetable.add(utimetable);
        }//1번째 for
    } //setTimetable

    //d = day, h = hour, s = class_name, i = timetable number
    public User_timetable2 addTime(int d, int h, String s, User_timetable2 u){
        String spot = null;
        switch(h){
            case 1:
                if (d==1) u.setMon_1(s);
                else if(d==2) u.setTue_1(s);
                else if(d==3) u.setWed_1(s);
                else if(d==4) u.setThr_1(s);
                else if(d==5) u.setFri_1(s);
                break;
            case 2:
                if (d==1) u.setMon_2(s);
                else if(d==2) u.setTue_2(s);
                else if(d==3) u.setWed_2(s);
                else if(d==4) u.setThr_2(s);
                else if(d==5) u.setFri_2(s);
                break;
            case 3:
                if (d==1) u.setMon_3(s);
                else if(d==2) u.setTue_3(s);
                else if(d==3) u.setWed_3(s);
                else if(d==4) u.setThr_3(s);
                else if(d==5) u.setFri_3(s);
                break;
            case 4:
                if (d==1) u.setMon_4(s);
                else if(d==2) u.setTue_4(s);
                else if(d==3) u.setWed_4(s);
                else if(d==4) u.setThr_4(s);
                else if(d==5) u.setFri_4(s);
                break;
            case 5:
                if (d==1) u.setMon_5(s);
                else if(d==2) u.setTue_5(s);
                else if(d==3) u.setWed_5(s);
                else if(d==4) u.setThr_5(s);
                else if(d==5) u.setFri_5(s);
                break;
            case 6:
                if (d==1) u.setMon_6(s);
                else if(d==2) u.setTue_6(s);
                else if(d==3) u.setWed_6(s);
                else if(d==4) u.setThr_6(s);
                else if(d==5) u.setFri_6(s);
                break;
            case 7:
                if (d==1) u.setMon_7(s);
                else if(d==2) u.setTue_7(s);
                else if(d==3) u.setWed_7(s);
                else if(d==4) u.setThr_7(s);
                else if(d==5) u.setFri_7(s);
                break;
        }
        return u;
    }

    // print Timetable 생성된 시간표 출력
    public List<User_timetable2> printTimetable(){
        return timetable;
    }

    // print Elective 추천 교양 과목 출력
    public List<Class> printElective(){
        //추천 교양 과목 모두
        List<User_elective_timetable> id = userElectiveTimetableRepository.findClassId(user_no);

        //추천 교양 과목 시간표 번호만
        List<Integer> timetable_no = userElectiveTimetableRepository.findTimetableNo(user_no);
        for (int i=timetable_no.get(0); i<timetable_no.size(); i++){
            System.out.println("timetable_no : "+i);
//            for (int j=0; j<5; j++){
//                System.out.println(id);
//            }
        }
        System.out.println(class_elect);
        return class_elect;
    }
}    //TimeService