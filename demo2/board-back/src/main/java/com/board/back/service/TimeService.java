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

    //user_timetable2, 과목 정보
    List<User_timetable2> timetable = new ArrayList<>();
    Class Class_1;
    Class Class_2;
    Class Class_3;
    Class Class_4;
    Class Class_5;
    Class Class_6;
    Class Class_7;
    Class Class_8;
    Class Class_9;

    //user_timetable3, 시험 정보
    List<User_timetable3> timetableDetail = new ArrayList<>();

    //user_elective_timetable
    List<List<User_elective_timetable2>> class_elect = new ArrayList<>();

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

            //timetable 과목 시험 정보
            User_timetable3 utimetable_detail = new User_timetable3();
            utimetable_detail.setUser_timetable_no(timetable_org.get(i).getUser_timetable_no());
            utimetable_detail.setUser_no(user_no);
            if (Class_1 != null) {
                utimetable_detail.setClass_1_name(Class_1.getClass_name());
                utimetable_detail.setClass_1_course_id(Class_1.getCourse_id());
                utimetable_detail.setClass_1_professor_name(Class_1.getProfessor_name());
                utimetable_detail.setClass_1_mid(Class_1.getMid_plan());
                utimetable_detail.setClass_1_final(Class_1.getFinal_plan());
                utimetable_detail.setClass_1_extra(Class_1.getExtra_plan());
            }
            if (Class_2 != null) {
                utimetable_detail.setClass_2_name(Class_2.getClass_name());
                utimetable_detail.setClass_2_course_id(Class_2.getCourse_id());
                utimetable_detail.setClass_2_professor_name(Class_2.getProfessor_name());
                utimetable_detail.setClass_2_mid(Class_2.getMid_plan());
                utimetable_detail.setClass_2_final(Class_2.getFinal_plan());
                utimetable_detail.setClass_2_extra(Class_2.getExtra_plan());
            }
            if (Class_3 != null) {
                utimetable_detail.setClass_3_name(Class_3.getClass_name());
                utimetable_detail.setClass_3_course_id(Class_3.getCourse_id());
                utimetable_detail.setClass_3_professor_name(Class_3.getProfessor_name());
                utimetable_detail.setClass_3_mid(Class_3.getMid_plan());
                utimetable_detail.setClass_3_final(Class_3.getFinal_plan());
                utimetable_detail.setClass_3_extra(Class_3.getExtra_plan());
            }
            if (Class_4 != null) {
                utimetable_detail.setClass_4_name(Class_4.getClass_name());
                utimetable_detail.setClass_4_course_id(Class_4.getCourse_id());
                utimetable_detail.setClass_4_professor_name(Class_4.getProfessor_name());
                utimetable_detail.setClass_4_mid(Class_4.getMid_plan());
                utimetable_detail.setClass_4_final(Class_4.getFinal_plan());
                utimetable_detail.setClass_4_extra(Class_4.getExtra_plan());
            }
            if (Class_5 != null) {
                utimetable_detail.setClass_5_name(Class_5.getClass_name());
                utimetable_detail.setClass_5_course_id(Class_5.getCourse_id());
                utimetable_detail.setClass_5_professor_name(Class_5.getProfessor_name());
                utimetable_detail.setClass_5_mid(Class_5.getMid_plan());
                utimetable_detail.setClass_5_final(Class_5.getFinal_plan());
                utimetable_detail.setClass_5_extra(Class_5.getExtra_plan());
            }
            if (Class_6 != null) {
                utimetable_detail.setClass_6_name(Class_6.getClass_name());
                utimetable_detail.setClass_6_course_id(Class_6.getCourse_id());
                utimetable_detail.setClass_6_professor_name(Class_6.getProfessor_name());
                utimetable_detail.setClass_6_mid(Class_6.getMid_plan());
                utimetable_detail.setClass_6_final(Class_6.getFinal_plan());
                utimetable_detail.setClass_6_extra(Class_6.getExtra_plan());
            }
            if (Class_7 != null) {
                utimetable_detail.setClass_7_name(Class_7.getClass_name());
                utimetable_detail.setClass_7_course_id(Class_7.getCourse_id());
                utimetable_detail.setClass_7_professor_name(Class_7.getProfessor_name());
                utimetable_detail.setClass_7_mid(Class_7.getMid_plan());
                utimetable_detail.setClass_7_final(Class_7.getFinal_plan());
                utimetable_detail.setClass_7_extra(Class_7.getExtra_plan());
            }
            if (Class_8 != null) {
                utimetable_detail.setClass_8_name(Class_8.getClass_name());
                utimetable_detail.setClass_8_course_id(Class_8.getCourse_id());
                utimetable_detail.setClass_8_professor_name(Class_8.getProfessor_name());
                utimetable_detail.setClass_8_mid(Class_8.getMid_plan());
                utimetable_detail.setClass_8_final(Class_8.getFinal_plan());
                utimetable_detail.setClass_8_extra(Class_8.getExtra_plan());
            }
            if (Class_9 != null) {
                utimetable_detail.setClass_9_name(Class_9.getClass_name());
                utimetable_detail.setClass_9_course_id(Class_9.getCourse_id());
                utimetable_detail.setClass_9_professor_name(Class_9.getProfessor_name());
                utimetable_detail.setClass_9_mid(Class_9.getMid_plan());
                utimetable_detail.setClass_9_final(Class_9.getFinal_plan());
                utimetable_detail.setClass_9_extra(Class_9.getExtra_plan());
            }

            //timetable 과목 시간대 정보
            User_timetable2 utimetable = new User_timetable2();
            utimetable.setUser_timetable_no(timetable_org.get(i).getUser_timetable_no());
            utimetable.setUser_no(user_no);
            utimetable.setCredit(timetable_org.get(i).getCredit());
            String name = null; //과목명
            int time = 0; //교시
            int day = 0; // 요일
            int hour = 0; // 시간

            for (int j = 0; j < class_list.size(); j++) {
                name = class_list.get(j).getClass_name();
                time = class_list.get(j).getClass_time();

                if (time / 10000000 > 0) {
                    day = time / 10000000;
                    hour = time % 10000000 / 1000000;
                    utimetable = addTime(day, hour, name, utimetable);
                    day = time % 1000000 / 100000;
                    hour = time % 100000 / 10000;
                    utimetable = addTime(day, hour, name, utimetable);
                    day = time % 10000 / 100;
                    hour = time % 100;
                    utimetable = addTime(day, hour, name, utimetable);
                    day = time % 100 / 10;
                    hour = time % 10;
                    utimetable = addTime(day, hour, name, utimetable);
                } else if (time / 100000 > 0) {
                    day = time / 100000;
                    hour = time % 100000 / 10000;
                    utimetable = addTime(day, hour, name, utimetable);
                    day = time % 10000 / 1000;
                    hour = time % 1000 / 100;
                    utimetable = addTime(day, hour, name, utimetable);
                    day = time % 100 / 10;
                    hour = time % 10;
                    utimetable = addTime(day, hour, name, utimetable);
                } else if (time / 1000 > 0) {
                    day = time / 1000;
                    hour = time % 1000 / 100;
                    utimetable = addTime(day, hour, name, utimetable);
                    day = time % 100 / 10;
                    hour = time % 10;
                    utimetable = addTime(day, hour, name, utimetable);
                } else {
                    day = time / 10;
                    hour = time % 10;
                    utimetable = addTime(day, hour, name, utimetable);
                }
                //System.out.println(day + " " + hour);
            }//2번째 for
            //System.out.println(utimetable);
            timetableDetail.add(utimetable_detail);
            timetable.add(utimetable);
        }//1번째 for
    } //setTimetable

    //d = day, h = hour, s = class_name, i = timetable number
    public User_timetable2 addTime(int d, int h, String s, User_timetable2 u) {
        String spot = null;
        switch (h) {
            case 1:
                if (d == 1) u.setMon_1(s);
                else if (d == 2) u.setTue_1(s);
                else if (d == 3) u.setWed_1(s);
                else if (d == 4) u.setThr_1(s);
                else if (d == 5) u.setFri_1(s);
                break;
            case 2:
                if (d == 1) u.setMon_2(s);
                else if (d == 2) u.setTue_2(s);
                else if (d == 3) u.setWed_2(s);
                else if (d == 4) u.setThr_2(s);
                else if (d == 5) u.setFri_2(s);
                break;
            case 3:
                if (d == 1) u.setMon_3(s);
                else if (d == 2) u.setTue_3(s);
                else if (d == 3) u.setWed_3(s);
                else if (d == 4) u.setThr_3(s);
                else if (d == 5) u.setFri_3(s);
                break;
            case 4:
                if (d == 1) u.setMon_4(s);
                else if (d == 2) u.setTue_4(s);
                else if (d == 3) u.setWed_4(s);
                else if (d == 4) u.setThr_4(s);
                else if (d == 5) u.setFri_4(s);
                break;
            case 5:
                if (d == 1) u.setMon_5(s);
                else if (d == 2) u.setTue_5(s);
                else if (d == 3) u.setWed_5(s);
                else if (d == 4) u.setThr_5(s);
                else if (d == 5) u.setFri_5(s);
                break;
            case 6:
                if (d == 1) u.setMon_6(s);
                else if (d == 2) u.setTue_6(s);
                else if (d == 3) u.setWed_6(s);
                else if (d == 4) u.setThr_6(s);
                else if (d == 5) u.setFri_6(s);
                break;
            case 7:
                if (d == 1) u.setMon_7(s);
                else if (d == 2) u.setTue_7(s);
                else if (d == 3) u.setWed_7(s);
                else if (d == 4) u.setThr_7(s);
                else if (d == 5) u.setFri_7(s);
                break;
        }
        return u;
    }

    // print Timetable 생성된 시간표 출력
    public List<User_timetable2> printTimetable() {
        return timetable;
    }

    public List<User_timetable3> printTimetableDetail() {
        return timetableDetail;
    }

    // print Elective 추천 교양 과목 출력
    public List<List<User_elective_timetable2>> printElective() {
        List<Integer> elect_id = new ArrayList<>();
        Class n = null;
        //추천 교양 과목 시간표 번호
        List<Integer> timetable_no = userElectiveTimetableRepository.findTimetableNo(user_no);
        if (timetable_no.size() > 0) {
                for (int i = timetable_no.get(0); i < timetable_no.get(0) + timetable_no.size(); i++) {
                    elect_id = userElectiveTimetableRepository.findClassId(i);
                    List<User_elective_timetable2> elect_class = new ArrayList<>();
                    for (int j = 0; j < elect_id.size(); j++) {
                        n = classRepository.findClass(elect_id.get(j));
                        User_elective_timetable2 tmp = new User_elective_timetable2();
                        String t = "";
                        tmp.setTimetable_no(i);
                        tmp.setClass_no(n.getClass_no());
                        tmp.setClass_name(n.getClass_name());
                        tmp.setClass_time(setTime(n.getClass_time(), t));
                        elect_class.add(tmp);
                    }//2번째 for
                    System.out.println(elect_class);
                    class_elect.add(elect_class);
                }//1번째 for
                return class_elect;
            }else {
            return null;
        }
        }



    public String setTime(int time,String t){
        int day = 0; // 요일
        int hour = 0; // 시간
        String tmp_time = "";
        if(time / 10000000 > 0){
            day = time / 10000000;
            hour = time % 10000000 / 1000000;
            tmp_time = convertTime(day,hour);
            t+=tmp_time;
            day = time % 1000000 / 100000;
            hour = time % 100000 / 10000;
            tmp_time = convertTime(day,hour);
            t+=tmp_time;
            day = time % 10000 / 100;
            hour = time % 100;
            tmp_time = convertTime(day,hour);
            t+=tmp_time;
            day = time % 100 / 10;
            hour = time % 10;
            tmp_time = convertTime(day,hour);
            t+=tmp_time;
        }
        else if (time / 100000 > 0) {
            day = time / 100000;
            hour = time % 100000 / 10000;
            tmp_time = convertTime(day,hour);
            t+=tmp_time;
            day = time % 10000 / 1000;
            hour = time % 1000 / 100;
            tmp_time = convertTime(day,hour);
            t+=tmp_time;
            day = time % 100 / 10;
            hour = time % 10;
            tmp_time = convertTime(day,hour);
            t+=tmp_time;
        } else if (time / 1000 > 0) {
            day = time / 1000;
            hour = time % 1000 / 100;
            tmp_time = convertTime(day,hour);
            t+=tmp_time;
            day = time % 100 / 10;
            hour = time % 10;
            tmp_time = convertTime(day,hour);
            t+=tmp_time;
        } else {
            day = time / 10;
            hour = time % 10;
            tmp_time = convertTime(day,hour);
            t+=tmp_time;
        }
        return t;
    }
    public String convertTime (int day, int hour){
        String tmp_time = "";
        switch(day) {
            case 1:
                tmp_time+="월";
                break;
            case 2:
                tmp_time+="화";
                break;
            case 3:
                tmp_time+="수";
                break;
            case 4:
                tmp_time+="목";
                break;
            case 5:
                tmp_time+="금";
        }
         return tmp_time+Integer.toString(hour);
    }
}    //TimeService