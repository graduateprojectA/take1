package com.board.back.service;

import com.board.back.model.*;
import com.board.back.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class TimetableService {
    @Autowired
    private MajorRepository majorRepository;
    @Autowired
    private TimeRepository timeRepository;
    @Autowired
    private UserClassRepository userClassRepository;
    @Autowired
    private ClassRepository ClassRepository;
    @Autowired
    private UserTimetableRepository userTimetableRepository;
    @Autowired
    private CourseRepository CourseRepository;
    @Autowired
    private FieldRepository FieldRepository;
    @Autowired
    private UserPreferenceRepository userPreferenceRepository;
    @Autowired
    private ClassElectiveRepository classElectiveRepository;
    @Autowired
    private UserElectiveTimetableRepository userElectiveTimetableRepository;
    public int out_time[][] = new int[5][7];
    int major_no=0;
    int time_mon = 0, time_tue = 0, time_wed = 0, time_thr = 0, time_fri = 0;
    ArrayList<Class_character> first_able_class_list = new ArrayList<Class_character> ();
    ArrayList<Class_character> second_able_class_list = new ArrayList<Class_character> ();
    ArrayList<Class_character> third_able_class_list = new ArrayList<Class_character> ();
    public static String user_pre[] = new String[6];
    ArrayList<Class_character> able_elective_class = new ArrayList<Class_character> ();
    int first_class_check[] = new int[100];
    int second_class_check[] = new int[100];
    int third_class_check[] = new int[100];
    int first_timetable_smallest_credit = 0;
    int first_timetable_smallest_class_num = 0;
    int second_timetable_smallest_credit = 0;
    int second_timetable_smallest_class_num = 0;
    int third_timetable_smallest_credit = 0;
    int third_timetable_smallest_class_num = 0;
    int timetable_num = 0;
    ArrayList<New_timetable> new_timetable_list = new ArrayList<New_timetable> ();
    int user_no = 0;
    public void setUser_no (int n){ this.user_no = n; }
    public int getUser_no () {return this.user_no;}
    int dfs_array[] = new int[10000];
    ArrayList<String> new_timetable = new ArrayList<String> ();
    int class_check[] = new int[100];
    int class_equal_check[] = new int[3000];
    int credit;
    public List<Class_elective> elective_sort(List<Class_elective> u){
        List<Class_elective> temp;
        temp=u;
        return temp;
    }

    public void first_select(int v, int n) {
        int check_class_num = 0;
        for(int i = 0; i <= v; i ++) {
            check_class_num += first_class_check[i];
        }
        if(check_class_num > 8) {
            return;
        }
        else {
            if (v == n) {
                credit= 0;
                int course_equal_check[] = new int[40000];
                int now_out_time[][] = new int [5][7];
                for(int i = 0; i < n; i++) {
                    if(first_class_check[i] == 1) {
                        Class_character now_class = first_able_class_list.get(i);
                        int now_credit = now_class.getClass_credit();
                        int now_time = now_class.getClass_time();
                        int now_no = now_class.getClass_no();
                        int now_course_id = now_class.getCourse_id();

                        // 1) 같은 학수번호 제거
                        if(course_equal_check[now_course_id] == 1) {
                            return;
                        }
                        course_equal_check[now_course_id] = 1;
                        // 2) 시간 0인 수업 제거
                        if(now_time == 0) {
                            return;
                        }


                        // 3) 총학점 제거
                        credit += now_credit;
                        if(credit > 21 || credit < 3) {
                            return;
                        }
                        // 4) 수업끼리 시간 겹치면 제거
                        String now_time_str = Integer.toString(now_time);
                        for(int j = 0; j < now_time_str.length(); j++) {
                            int now_time_integer_first = Integer.parseInt(now_time_str.substring(0, 1))-1;
                            int now_time_integer_second = Integer.parseInt(now_time_str.substring(1, 2))-1;
                            if(now_out_time[now_time_integer_first][now_time_integer_second] == 1) {
                                return;
                            }else {
                                now_out_time[now_time_integer_first][now_time_integer_second] = 1;
                            }
                            if (now_time_str.length() >= 2) {
                                now_time_str = now_time_str.substring(2, now_time_str.length());
                            }
                        }
                    }
                }
                // 여기까지 통과했으면 저장
                if(credit > 0) {
                    String new_timetable_time = "";
                    for(int i = 0; i < n; i++) {
                        new_timetable_time  = new_timetable_time+Integer.toString(first_class_check[i]);
                    }
                    new_timetable_list.add(new New_timetable(now_out_time, credit, new_timetable_time));
                }
            }
            else {
                first_class_check[v] = 1;
                first_select(v+1, n);
                first_class_check[v] = 0;
                first_select(v+1, n);
            }
        }
    }
    public void second_select(int v, int n) {
        int check_class_num = 0;
        for(int i = 0; i <= v; i ++) {
            check_class_num += second_class_check[i];
        }
        if(check_class_num + first_timetable_smallest_class_num > 9) {
            return;
        }
        else {
            if (v == n) {
                for(int aaaa = 0; aaaa < timetable_num; aaaa ++) {
                    New_timetable now_timetable = new_timetable_list.get(aaaa);
                    int now_timetable_out_time[][] = now_timetable.getTimetable_out_time();
                    int now_timetable_credit = now_timetable.getCredit();
                    int course_equal_check[] = new int[40000];

                    for(int i = 0; i < n; i++) {
                        if(second_class_check[i] == 1) {
                            Class_character now_class = second_able_class_list.get(i);
                            int now_credit = now_class.getClass_credit();
                            int now_time = now_class.getClass_time();
                            int now_no = now_class.getClass_no();
                            int now_course_id = now_class.getCourse_id();

                            // 1) 같은 학수번호 제거
                            if(course_equal_check[now_course_id] == 1) {
                                return;
                            }
                            course_equal_check[now_course_id] = 1;
                            // 2) 시간 0인 수업 제거
                            if(now_time == 0) {
                                return;
                            }
                            // 3) 총학점 제거
                            now_timetable_credit += now_credit;
                            if(now_timetable_credit > 21 || now_timetable_credit < 3) {
                                return;
                            }
                            // 4) 수업끼리 시간 겹치면 제거
                            String now_time_str = Integer.toString(now_time);
                            for(int j = 0; j < now_time_str.length(); j++) {
                                int now_time_integer_first = Integer.parseInt(now_time_str.substring(0, 1))-1;
                                int now_time_integer_second = Integer.parseInt(now_time_str.substring(1, 2))-1;
                                if(now_timetable_out_time[now_time_integer_first][now_time_integer_second] == 1) {
                                    return;
                                }else {
                                    now_timetable_out_time[now_time_integer_first][now_time_integer_second] = 1;
                                }
                                if (now_time_str.length() >= 2) {
                                    now_time_str = now_time_str.substring(2, now_time_str.length());
                                }
                            }
                        }
                    }
                    // 여기까지 통과했으면 저장
                    if(now_timetable_credit > 0) {
                        String new_timetable_time = now_timetable.getNew_timetable();
                        for(int i = 0; i < n; i++) {
                            new_timetable_time  = new_timetable_time + Integer.toString(second_class_check[i]);
                        }
                        new_timetable_list.add(new New_timetable(now_timetable_out_time, now_timetable_credit, new_timetable_time));
                    }
                }
            }else {
                second_class_check[v] = 1;
                second_select(v+1, n);
                second_class_check[v] = 0;
                second_select(v+1, n);
            }
        }
    }
    public void third_select(int v, int n) {
        int check_class_num = 0;
        for(int i = 0; i <= v; i ++) {
            check_class_num += third_class_check[i];
        }
        if(check_class_num + second_timetable_smallest_class_num > 9) {
            return;
        }
        else {
            if (v == n) {
                for(int aaaa = 0; aaaa < timetable_num; aaaa ++) {
                    New_timetable now_timetable = new_timetable_list.get(aaaa);
                    int now_timetable_out_time[][] = now_timetable.getTimetable_out_time();
                    int now_timetable_credit = now_timetable.getCredit();
                    int course_equal_check[] = new int[40000];

                    for(int i = 0; i < n; i++) {
                        if(third_class_check[i] == 1) {
                            Class_character now_class = third_able_class_list.get(i);
                            int now_credit = now_class.getClass_credit();
                            int now_time = now_class.getClass_time();
                            int now_no = now_class.getClass_no();
                            int now_course_id = now_class.getCourse_id();

                            // 1) 같은 학수번호 제거
                            if(course_equal_check[now_course_id] == 1) {
                                return;
                            }
                            course_equal_check[now_course_id] = 1;
                            // 2) 시간 0인 수업 제거
                            if(now_time == 0) {
                                return;
                            }
                            // 3) 총학점 제거
                            now_timetable_credit += now_credit;
                            if(now_timetable_credit > 21 || now_timetable_credit < 3) {
                                return;
                            }
                            // 4) 수업끼리 시간 겹치면 제거
                            String now_time_str = Integer.toString(now_time);
                            for(int j = 0; j < now_time_str.length(); j++) {
                                int now_time_integer_first = Integer.parseInt(now_time_str.substring(0, 1))-1;
                                int now_time_integer_second = Integer.parseInt(now_time_str.substring(1, 2))-1;
                                if(now_timetable_out_time[now_time_integer_first][now_time_integer_second] == 1) {
                                    return;
                                }else {
                                    now_timetable_out_time[now_time_integer_first][now_time_integer_second] = 1;
                                }
                                if (now_time_str.length() >= 2) {
                                    now_time_str = now_time_str.substring(2, now_time_str.length());
                                }
                            }
                        }
                    }
                    // 여기까지 통과했으면 저장
                    if(now_timetable_credit > 0) {
                        String new_timetable_time = now_timetable.getNew_timetable();
                        for(int i = 0; i < n; i++) {
                            new_timetable_time  = new_timetable_time + Integer.toString(third_class_check[i]);
                        }
                        new_timetable_list.add(new New_timetable(now_timetable_out_time, now_timetable_credit, new_timetable_time));
                    }
                }
            }else {
                third_class_check[v] = 1;
                third_select(v+1, n);
                third_class_check[v] = 0;
                third_select(v+1, n);
            }
        }
    }
    public void getTime(int no) {
        System.out.println("h2");
        time_mon = timeRepository.findMon(no);
        time_tue = timeRepository.findTue(no);
        time_wed = timeRepository.findWed(no);
        time_thr = timeRepository.findThr(no);
        time_fri = timeRepository.findFri(no);
        String[] temp_time = new String[5];
        temp_time[0] = Integer.toString(time_mon);
        temp_time[1] = Integer.toString(time_tue);
        temp_time[2] = Integer.toString(time_wed);
        temp_time[3] = Integer.toString(time_thr);
        temp_time[4] = Integer.toString(time_fri);
        for(int temp_time_index = 0; temp_time_index < 5; temp_time_index++) {
            int jjj = 6;
            for(int each_temp = (temp_time[temp_time_index].length()- 1); each_temp >= 0; each_temp--) {
                out_time[temp_time_index][jjj] = Integer.parseInt(temp_time[temp_time_index].substring(each_temp, each_temp+1));
                jjj--;
            }
        }
        System.out.println("1. 사용자가 제외한 시간");
        for(int i = 0 ; i < 5; i++) {
            for (int j = 0; j < 7; j++) {
                System.out.printf("%d", out_time[i][j]);
            }
            System.out.println("");
        }
    }
    public void getUser_class(int no) {
        System.out.println("\n3. 사용자가 들을 수 있는 과목");
        List<Integer> now_class_no, now_class_time, now_class_credit, now_course_id;
        ArrayList<Integer> temp_check_field = new ArrayList<>();
        ArrayList<Integer> now_check_field = new ArrayList<>();
        List<Course> temp_field_no;
        List<Field> temp_check_no;
        now_class_no = userClassRepository.findCnum(no);
        Collections.sort(now_class_no);
        now_class_time = ClassRepository.findCtime(now_class_no);
        now_class_credit = userClassRepository.findCcredit(no);
        now_course_id = ClassRepository.findCCID(now_class_no);
        temp_field_no = CourseRepository.findCF(now_course_id);
        temp_field_no = CourseRepository.findCF(now_course_id);


        for (int i = 0; i < now_course_id.size(); i++) {
            int a = now_course_id.get(i);
            int b = 0;
            for (int j = 0; j < temp_field_no.size(); j++) {
                if (temp_field_no.get(j).getCourse_id() == a) {
                    b = temp_field_no.get(j).getField_no();
                    break;
                }
            }
            temp_check_field.add(i, b);
        }
        temp_check_no = FieldRepository.printCFN(temp_check_field);
        for (int i = 0; i < temp_check_field.size(); i++) {
            int a = temp_check_field.get(i);
            int b = 0;
            for (int j = 0; j < temp_check_no.size(); j++) {
                if (temp_check_no.get(j).getField_no() == a) {
                    b = temp_check_no.get(j).getCheck_field_no();
                    break;
                }
            }
            now_check_field.add(i, b);
        }
        int count=0;
        for (int i = 0; i < now_class_time.size(); i++) {
            int flag = 0;

            if (now_class_time.get(i) != null) {
                String now_class_time_str = Integer.toString(now_class_time.get(i));
                for (int j = 0; j < now_class_time_str.length(); j++) {
                    // out_time array는 0부터 시작하기 때문에 1 뺌
                    int now_time_integer_first = Integer.parseInt(now_class_time_str.substring(0, 1)) - 1;
                    int now_time_integer_second = Integer.parseInt(now_class_time_str.substring(1, 2)) - 1;
                    if (out_time[now_time_integer_first][now_time_integer_second] == 0) {
                        flag = 1;
                        continue;
                    }
                    if (now_class_time_str.length() >= 2) {
                        now_class_time_str = now_class_time_str.substring(2, now_class_time_str.length());
                    }
                }
            }count++;
            Class_character now_class = new Class_character(now_class_no.get(i), now_course_id.get(i), now_class_time.get(i), now_class_credit.get(i));
            if (now_class_time.get(i) != null) {
                if (now_check_field.get(i) == 7 || now_check_field.get(i) == 8) {
                    first_able_class_list.add(now_class);
                    System.out.printf("class_no: %d first add\n", now_class.getClass_no());
                } else if (now_check_field.get(i) == 1 || now_check_field.get(i) == 2 || now_check_field.get(i) == 3 || now_check_field.get(i) == 4) {
                    second_able_class_list.add(now_class);
                    System.out.printf("class_no: %d second add\n", now_class.getClass_no());
                } else if (now_check_field.get(i) == 5 || now_check_field.get(i) == 6 || now_check_field.get(i) == 9 || now_check_field.get(i) == 11 || now_check_field.get(i) == 12) {
                    third_able_class_list.add(now_class);
                    System.out.printf("class_no: %d third add\n", now_class.getClass_no());
                }
                System.out.printf("%d %d %d %d %d\n", now_class_no.get(i), now_course_id.get(i), now_class_time.get(i), now_class_credit.get(i), now_check_field.get(i));
            }
        }
        System.out.println(count);
        System.out.println("h4");


        System.out.printf("\n3. first 가능한 과목 개수 : %d\n", first_able_class_list.size());
        first_select(0, first_able_class_list.size());
        Collections.sort(new_timetable_list);
        Collections.reverse(new_timetable_list);

        System.out.printf("size: %d\n", new_timetable_list.size());
        int len = new_timetable_list.size();
        if (len > 5) {
            for (int i = len - 1; i >= 5; i--) {
                new_timetable_list.remove(i);
            }
        }
        System.out.printf("size: %d\n", new_timetable_list.size());
        timetable_num = new_timetable_list.size();
        System.out.println("======================first sorted===============");
        for(int i = 0; i < timetable_num; i++) {
            New_timetable a = new_timetable_list.get(i);
            int now_credit = a.getCredit();
            String now_time = a.getNew_timetable();
            System.out.printf("%d %s\n", now_credit, now_time);
        }
        if(timetable_num > 0) {
            first_timetable_smallest_credit = new_timetable_list.get(timetable_num-1).getCredit();
            String[] first_timetable_smallest_class_num_list = new_timetable_list.get(timetable_num-1).getNew_timetable().split("");
            for (int i = 0; i < first_timetable_smallest_class_num_list.length; i++) {
                if (first_timetable_smallest_class_num_list[i].equals("1")) {
                    first_timetable_smallest_class_num++;
                }
            }
            System.out.printf("smallest credit, class_num: %d, %d\n\n", first_timetable_smallest_credit, first_timetable_smallest_class_num);
        }
        System.out.printf("\n4. second 가능한 과목 개수 : %d\n", second_able_class_list.size());
        second_select(0, second_able_class_list.size());

        //////////////////// NEW //////////////////////////
        for(int i = 0; i < new_timetable_list.size(); i++) {
            New_timetable now_timetable = new_timetable_list.get(i);
            if(now_timetable.getNew_timetable().length() != first_able_class_list.size()+second_able_class_list.size()) {
                new_timetable_list.remove(now_timetable);
                i--;
            }
        }
        //////////////////////////////////////////////////

        Collections.sort(new_timetable_list);
        Collections.reverse(new_timetable_list);

        for (int i = 0; i < new_timetable_list.size(); i++) {
            New_timetable now_timetable = new_timetable_list.get(i);
            System.out.printf("%d %s\n", now_timetable.getCredit(), now_timetable.getNew_timetable());
        }
        System.out.printf("size: %d\n", new_timetable_list.size());
        int len2 = new_timetable_list.size();
        if (len2 > 5) {
            for (int i = len2 - 1; i >= 5; i--) {
                new_timetable_list.remove(i);
            }
        }
        System.out.printf("size: %d\n", new_timetable_list.size());
        timetable_num = new_timetable_list.size();
        System.out.println("======================second sort===============");
        for (int i = 0; i < timetable_num; i++) {
            New_timetable a = new_timetable_list.get(i);
            int now_credit = a.getCredit();
            String now_time = a.getNew_timetable();
            System.out.printf("%d %s\n", now_credit, now_time);
        }
        if(timetable_num > 0) {
            second_timetable_smallest_credit = new_timetable_list.get(timetable_num-1).getCredit();
            String[] second_timetable_smallest_class_num_list = new_timetable_list.get(timetable_num-1).getNew_timetable().split("");
            for (int i = 0; i < second_timetable_smallest_class_num_list.length; i++) {
                if (second_timetable_smallest_class_num_list[i].equals("1")) {
                    second_timetable_smallest_class_num++;
                }
            }
        }
        System.out.printf("smallest credit, class_num: %d, %d\n\n", second_timetable_smallest_credit, second_timetable_smallest_class_num);
        System.out.printf("\n5. third 가능한 과목 개수 : %d\n", third_able_class_list.size());
        for(int i=0;i<third_able_class_list.size();i++){
            System.out.println(third_able_class_list.get(i).getCourse_id());
        }
        third_select(0, third_able_class_list.size());
        for(int i = 0; i < new_timetable_list.size(); i++) {
            New_timetable now_timetable = new_timetable_list.get(i);
            if(now_timetable.getNew_timetable().length() != first_able_class_list.size()+second_able_class_list.size()+third_able_class_list.size()) {
                new_timetable_list.remove(now_timetable);
                i--;
            }
        }
        Collections.sort(new_timetable_list);
        Collections.reverse(new_timetable_list);

        for (int i = 0; i < new_timetable_list.size(); i++) {
            New_timetable now_timetable = new_timetable_list.get(i);
            System.out.printf("%d %s\n", now_timetable.getCredit(), now_timetable.getNew_timetable());
        }
        System.out.printf("size: %d\n", new_timetable_list.size());
        int len3 = new_timetable_list.size();
        if (len3 > 5) {
            for (int i = len3 - 1; i >= 5; i--) {
                new_timetable_list.remove(i);
            }
        }
        System.out.printf("size: %d\n", new_timetable_list.size());
        timetable_num = new_timetable_list.size();
        System.out.println("======================third sorted===============");
        for(int i = 0; i < timetable_num; i++) {
            New_timetable a = new_timetable_list.get(i);
            int now_credit = a.getCredit();
            String now_time = a.getNew_timetable();
            System.out.printf("%d %s\n", now_credit, now_time);
        }
        if(timetable_num > 0) {
            third_timetable_smallest_credit = new_timetable_list.get(timetable_num-1).getCredit();
            String[] third_timetable_smallest_class_num_list = new_timetable_list.get(timetable_num-1).getNew_timetable().split("");
            for (int i = 0; i < third_timetable_smallest_class_num_list.length; i++) {
                if (third_timetable_smallest_class_num_list[i].equals("1")) {
                    third_timetable_smallest_class_num++;
                }
            }
            System.out.printf("smallest credit, class_num: %d, %d\n\n", third_timetable_smallest_credit, third_timetable_smallest_class_num);
        }

        int timetable_number = 1;
        int timetable_class_no[] = new int[first_able_class_list.size() + second_able_class_list.size() + third_able_class_list.size()];
        for (int i = 0; i < timetable_num; i++) {
            New_timetable now_timetable_add = new_timetable_list.get(i);
            int credit = now_timetable_add.getCredit();
            String new_timetable = now_timetable_add.getNew_timetable();
            for (int abc = 0; abc < first_able_class_list.size(); abc++) {
                timetable_class_no[abc] = first_able_class_list.get(abc).getClass_no();
            }
            for (int abc = 0; abc < second_able_class_list.size(); abc++) {
                timetable_class_no[abc + first_able_class_list.size()] = second_able_class_list.get(abc).getClass_no();
            }
            for (int abc = 0; abc < third_able_class_list.size(); abc++) {
                timetable_class_no[abc + first_able_class_list.size() + second_able_class_list.size()] = third_able_class_list.get(abc).getClass_no();
            }
            String[] now_timetable_list = new_timetable.split("");
            int class_num_check = 1;
            User_timetable user_timetable = new User_timetable();
            user_timetable.setUser_no(user_no);
            user_timetable.setCredit(credit);
            for (int k = 0; k < now_timetable_list.length; k++) {
                if (now_timetable_list[k].equals("1")) {
                    user_timetable.setClass(timetable_class_no[k], class_num_check);
                    class_num_check += 1;
                }
            }
            for (int k = class_num_check; k <= 9; k++) {
                user_timetable.setClass(-1, class_num_check);
                class_num_check += 1;
            }
            userTimetableRepository.save(user_timetable);
            System.out.println("DB ADD");
            timetable_number += 1;
        }
        //교양추천
        User_preference user_p = new User_preference();
        user_p = userPreferenceRepository.findCpreference(user_no);
        int exam_pre = user_p.getExam_pre();
        user_pre[exam_pre - 1] = "exam_per";
        int quiz_pre = user_p.getQuiz_pre();
        user_pre[quiz_pre - 1] = "quiz_per";
        int presentation_pre = user_p.getPresentation_pre();
        user_pre[presentation_pre - 1] = "presentation_per";
        int project_pre = user_p.getProject_pre();
        user_pre[project_pre - 1] = "project_per";
        int assignment_pre = user_p.getAssignment_pre();
        user_pre[assignment_pre - 1] = "assignment_per";
        int attendance_pre = user_p.getAttendance_pre();
        user_pre[attendance_pre - 1] = "attendance_per";

        List<Class_elective> user_class_e;
        user_class_e = classElectiveRepository.findCelective();
        user_class_e.sort(Comparator.reverseOrder());

        int elective_class_num = 1;
        for (int i = 0; i < user_class_e.size(); i++) {
            int new_class_no = user_class_e.get(i).getClass_no();
            int new_class_time;
            if(user_class_e.get(i).getClass_time()==null){
                new_class_time = 0;
            }else{
                new_class_time = user_class_e.get(i).getClass_time();
            }
            int new_class_credit = user_class_e.get(i).getClass_credit();
            Class_character new_elective_class = new Class_character(new_class_no, -1, new_class_time, new_class_credit);
            able_elective_class.add(new_elective_class);
            if (elective_class_num > 150) {
                break;
            }
            elective_class_num++;
        }

        for (int i = 0; i < timetable_num; i++) {
            int final_elective_class[] = new int[5];
            New_timetable now_timetable = new_timetable_list.get(i);
            int now_timetable_out_time[][] = now_timetable.getTimetable_out_time();
            elective_class_num = 0;
            AA:
            for (int j = 0; j < 150; j++) {
                Class_character now_elective_class = able_elective_class.get(j);
                String now_elective_time = Integer.toString(now_elective_class.getClass_time());
                for (int aak = 0; aak < now_elective_time.length(); aak++) {
                    int now_time_integer_first = Integer.parseInt(now_elective_time.substring(0, 1)) - 1;
                    int now_time_integer_second = Integer.parseInt(now_elective_time.substring(1, 2)) - 1;
                    if (now_timetable_out_time[now_time_integer_first][now_time_integer_second] == 1) {
                        continue AA;
                    }
                    if (now_elective_time.length() >= 2) {
                        now_elective_time = now_elective_time.substring(2, now_elective_time.length());
                    }
                }
                System.out.printf("final_elective_class_add: %d\n", now_elective_class.getClass_no());
                final_elective_class[elective_class_num] = now_elective_class.getClass_no();
                elective_class_num++;
                if (elective_class_num > 4) break;
            }
            int class_num_check = 1;
            int now_timetable_class_no[] = new int[9];
            String now_timetable_list[] = now_timetable.getNew_timetable().split("");
            for (int k = 0; k < now_timetable_list.length; k++) {
                if (now_timetable_list[k].equals("1")) {
                    now_timetable_class_no[class_num_check - 1] = timetable_class_no[k];
                    class_num_check += 1;
                }
            }
            for (int k = class_num_check; k <= 9; k++) {
                now_timetable_class_no[class_num_check - 1] = -1;
                class_num_check += 1;
            }
            int user_timetable_no = 0;
            for(int k=0;k<9;k++){
                System.out.println(now_timetable_class_no[k]);
            }
            List<User_timetable> user_tt;
            user_tt = userTimetableRepository.findCuser_timetable(user_no, now_timetable_class_no[0],
                    now_timetable_class_no[1], now_timetable_class_no[2], now_timetable_class_no[3],
                    now_timetable_class_no[4], now_timetable_class_no[5], now_timetable_class_no[6],
                    now_timetable_class_no[7], now_timetable_class_no[8]);

            for (int j = 0; j < user_tt.size(); j++) {
                user_timetable_no = user_tt.get(j).getUser_timetable_no();
                for (int timetable = 0; timetable < 5; timetable++) {
                    if (final_elective_class[timetable] != 0) {
                        System.out.printf("\ntimetable_no: %d, elective_class_no: %d\n", user_timetable_no, final_elective_class[timetable]);
                        User_elective_timetable user_elective_timetable=new User_elective_timetable();
                        user_elective_timetable.setUser_no(user_no);
                        user_elective_timetable.setTimetable_number(user_timetable_no);
                        user_elective_timetable.setClass_no(final_elective_class[timetable]);
                        userElectiveTimetableRepository.save(user_elective_timetable);
                    }
                }
                System.out.println("DB ADD");
            }
        }
    }
}