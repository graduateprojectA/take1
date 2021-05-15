
package com.board.back.service;

import com.board.back.model.*;
import com.board.back.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;
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
    public int out_time[][] = new int[5][7];
    int major_no=0;
    int time_mon = 0, time_tue = 0, time_wed = 0, time_thr = 0, time_fri = 0;
    ArrayList<Class_character> first_able_class_list = new ArrayList<Class_character> ();
    ArrayList<Class_character> second_able_class_list = new ArrayList<Class_character> ();
    ArrayList<Class_character> third_able_class_list = new ArrayList<Class_character> ();
    static String user_pre[] = new String[6];
    ArrayList<Class_character> able_elective_class = new ArrayList<Class_character> ();
    int first_class_check[] = new int[100];
    int second_class_check[] = new int[100];
    int third_class_check[] = new int[100];
    int first_timetable_smallest_credit = 0;
    int first_timetable_smallest_class_num = 0;
    static int second_timetable_smallest_credit = 0;
    static int second_timetable_smallest_class_num = 0;
    static int third_timetable_smallest_credit = 0;
    static int third_timetable_smallest_class_num = 0;
    ArrayList<New_timetable> new_timetable_list = new ArrayList<New_timetable> ();
    int user_no = 6;
    int dfs_array[] = new int[10000];
    ArrayList<String> new_timetable = new ArrayList<String> ();
    int class_check[] = new int[100];
    int class_equal_check[] = new int[3000];
    int credit;
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
                System.out.println(credit);
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
                        System.out.println(now_credit+" "+now_time+" "+now_no+" "+now_course_id);
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
                        System.out.println("c"+credit);
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
                for(int aaaa = 0; aaaa < 5; aaaa ++) {
                    New_timetable now_timetable = new_timetable_list.get(aaaa);
                    int now_timetable_out_time[][] = now_timetable.timetable_out_time;
                    int now_timetable_credit = now_timetable.credit;
                    int course_equal_check[] = new int[40000];

                    for(int i = 0; i < n; i++) {
                        if(second_class_check[i] == 1) {
                            Class_character now_class = second_able_class_list.get(i);
                            int now_credit = now_class.class_credit;
                            int now_time = now_class.class_time;
                            int now_no = now_class.class_no;
                            int now_course_id = now_class.course_id;

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
                        String new_timetable_time = now_timetable.new_timetable;
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
    public void getMajor(Integer no) {
        major_no = majorRepository.findMajorno(no);
        System.out.println(major_no);
    }
    public void getTime(Integer no) {
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
    public void getUser_class(Integer no) {
        List<Integer> now_class_no, now_class_time, now_class_credit, now_course_id;
        ArrayList<Integer> temp_check_field = new ArrayList<>();
        ArrayList<Integer> now_check_field = new ArrayList<>();
        List<Course> temp_field_no;
        List<Field> temp_check_no;
        now_class_no = userClassRepository.findCnum(no);
        now_class_time = ClassRepository.findCtime(now_class_no);
        now_class_credit = userClassRepository.findCcredit(no);
        now_course_id = ClassRepository.findCCID(now_class_no);
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
        for (int i = 0; i < now_class_time.size(); i++) {
            int flag = 0;
                if (now_class_time.get(i)!=null) {
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
                    if (flag == 0) {
                        Class_character now_class = new Class_character(now_class_no.get(i), now_course_id.get(i), now_class_time.get(i), now_class_credit.get(i));
                        if (now_check_field.get(i) == 7 || now_check_field.get(i) == 8){
                            first_able_class_list.add(now_class);
                        } else if (now_check_field.get(i) == 1 || now_check_field.get(i) == 2 || now_check_field.get(i) == 3 || now_check_field.get(i) == 4) {
                            second_able_class_list.add(now_class);
                        } else {
                            third_able_class_list.add(now_class);
                        }
                    }flag=0;
                }
        }System.out.printf("\n3. first 가능한 과목 개수 : %d\n", first_able_class_list.size());
        first_select(0, first_able_class_list.size());
        Collections.sort(new_timetable_list);
        Collections.reverse(new_timetable_list);

        System.out.printf("size: %d\n", new_timetable_list.size());
        int len = new_timetable_list.size();
        if(len > 5) {
            for(int i = len-1; i >= 5; i--) {
                new_timetable_list.remove(i);
            }
        }
        System.out.printf("size: %d\n", new_timetable_list.size());
        System.out.println("======================first sorted===============");
        for(int i = 0; i < 5; i++) {
            New_timetable a = new_timetable_list.get(i);
            int now_credit = a.getCredit();
            String now_time = a.getNew_timetable();
            System.out.printf("%d %s\n", now_credit, now_time);
        }
        first_timetable_smallest_credit = new_timetable_list.get(4).getCredit();
        String[] first_timetable_smallest_class_num_list = new_timetable_list.get(4).getNew_timetable().split("");
        for(int i = 0; i < first_timetable_smallest_class_num_list.length; i++) {
            if(first_timetable_smallest_class_num_list[i].equals("1")) {
                first_timetable_smallest_class_num++;
            }
        }
        System.out.printf("smallest credit, class_num: %d, %d\n\n", first_timetable_smallest_credit, first_timetable_smallest_class_num);

        System.out.printf("\n4. second 가능한 과목 개수 : %d\n", second_able_class_list.size());
        second_select(0, second_able_class_list.size());
        Collections.sort(new_timetable_list);
        Collections.reverse(new_timetable_list);

        for(int i = 0; i < new_timetable_list.size(); i++) {
            New_timetable now_timetable = new_timetable_list.get(i);
            System.out.printf("%d %s\n", now_timetable.credit, now_timetable.new_timetable);
        }
        System.out.printf("size: %d\n", new_timetable_list.size());
        int len2 = new_timetable_list.size();
        if (len2 > 5) {
            for(int i = len2-1; i >= 5; i--) {
                new_timetable_list.remove(i);
            }
        }
        System.out.printf("size: %d\n", new_timetable_list.size());
        System.out.println("======================second sorted===============");
        for(int i = 0; i < 5; i++) {
            New_timetable a = new_timetable_list.get(i);
            int now_credit = a.credit;
            String now_time = a.new_timetable;
            System.out.printf("%d %s\n", now_credit, now_time);
        }
        second_timetable_smallest_credit = new_timetable_list.get(4).credit;
        String[] second_timetable_smallest_class_num_list = new_timetable_list.get(4).new_timetable.split("");
        for(int i = 0; i < second_timetable_smallest_class_num_list.length; i++) {
            if(second_timetable_smallest_class_num_list[i].equals("1")) {
                second_timetable_smallest_class_num++;
            }
        }
        System.out.printf("smallest credit, class_num: %d, %d\n\n", second_timetable_smallest_credit, second_timetable_smallest_class_num);

        }

    public void dfs(int v, int n) {
        int me_sum = 0;
        for(int i = 0; i <= v; i ++) {
            me_sum += class_check[i];
        }

        if(me_sum > 9) {
            System.out.println();
            return;
        }
        else {
            if (v == n) {
                for(int i = 0; i < n; i++) {
                    System.out.printf("%d", class_check[i]);
                }
                System.out.println("");

                int credit = 0;
                for(int jj = 0; jj < 3000; jj++) {
                    class_equal_check[jj] = 0;
                }

                for(int i = 0; i < n; i++) {
                    if(class_check[i] == 1) {
                        int now_credit = able_class_list[i][2];
                        int now_time = able_class_list[i][1];
                        int now_no = able_class_list[i][0];

                        if (class_equal_check[now_no] == 1) {
                            return;
                        }
                        class_equal_check[now_no] = 1;
                        if (now_time == 0) {
                            return;
                        }
                        credit += now_credit;
                    }
                }
                System.out.printf(" %d\n", credit);
                if (credit >
                        21 || credit < 17) {
                    return;
                }
                else{
                    int now_out_time[][] = new int[5][7];
                    for(int i = 0; i < 5; i++) {
                        for(int j = 0; j < 7; j++) {
                            now_out_time[i][j] = out_time[i][j];
                        }
                    }

                    int now_out_class[] = new int[n];

                    for(int i = 0; i < n; i++) {
                        if(class_check[i] == 1) {
                            String now_time = Integer.toString(able_class_list[i][1]);
                            int now_class_no = able_class_list[i][0];

                            for(int j = 0; j < now_time.length(); j++) {
                                int now_time_integer_first = Integer.parseInt(now_time.substring(0, 1))-1;
                                int now_time_integer_second = Integer.parseInt(now_time.substring(1, 2))-1;
                                if(now_out_time[now_time_integer_first][now_time_integer_second] == 1) {
                                    return;
                                }else {
                                    now_out_time[now_time_integer_first][now_time_integer_second] = 1;
                                }
                                if (now_time.length() >= 2) {
                                    now_time = now_time.substring(2, now_time.length());
                                }
                                //error!!!!!!!!!!!
                                //class_no아니라 학수번호 확인해야함!!
//								if(class_check[now_class_no] == 1) {
//									return;
//								}else {
//									class_check[now_class_no] = 1;
//								}
                            }
                        }
                    }

                    System.out.println("timetable add");
                    String new_timetable_time = "";
                    for(int i = 0; i < n; i++) {
                        new_timetable_time  = new_timetable_time + Integer.toString(class_check[i]);
                        System.out.printf("%s", Integer.toString(class_check[i]));
                    }
                    new_timetable.add(new_timetable_time);
                    System.out.println("");
                }
                return;
            }else {
                class_check[v] = 1;
                dfs(v+1, n);
                class_check[v] = 0;
                dfs(v+1, n);
            }
        }
    }*/
}