package com.board.back.service;

import com.board.back.model.User_timetable;
import com.board.back.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    public static int out_time[][] = new int[5][7];
    int major_no=0;
    int time_mon = 0, time_tue = 0, time_wed = 0, time_thr = 0, time_fri = 0;

    int [][]able_class_list;
    int user_no = 6;
    int dfs_array[] = new int[10000];
    ArrayList<String> new_timetable = new ArrayList<String> ();
    int class_check[] = new int[100];
    int class_equal_check[] = new int[3000];

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
        String[] time_out_now = Integer.toString(time_mon).split("");
        for (int i = 0; i < time_out_now.length; i++) {
            out_time[0][i] = Integer.parseInt(time_out_now[i]);
        }
        time_out_now = Integer.toString(time_tue).split("");
        for (int i = 0; i < time_out_now.length; i++) {
            out_time[1][i] = Integer.parseInt(time_out_now[i]);
        }
        time_out_now = Integer.toString(time_wed).split("");
        for (int i = 0; i < time_out_now.length; i++) {
            out_time[2][i] = Integer.parseInt(time_out_now[i]);
        }
        time_out_now = Integer.toString(time_thr).split("");
        for (int i = 0; i < time_out_now.length; i++) {
            out_time[3][i] = Integer.parseInt(time_out_now[i]);
        }
        time_out_now = Integer.toString(time_fri).split("");
        for (int i = 0; i < time_out_now.length; i++) {
            out_time[4][i] = Integer.parseInt(time_out_now[i]);
        }

        System.out.println("사용자가 제외한 시간");
        for(int i = 0 ; i < 5; i++) {
            for (int j = 0; j < 7; j++) {
                System.out.printf("%d", out_time[i][j]);
            }
            System.out.println("");
        }
    }
    public void getUser_class(Integer no) {
        List<Integer> now_class_no,now_class_time,now_class_credit;
        now_class_no = userClassRepository.findCnum(no);
        now_class_time = ClassRepository.findCtime(now_class_no);
        now_class_credit = userClassRepository.findCcredit(no);
        able_class_list=new int[now_class_no.size()][3];
        for(int i=0;i<5;i++){
            able_class_list[i][0]=now_class_no.get(i);
            if(now_class_time.get(i)==null){
                able_class_list[i][1]=0;
            }else{
                able_class_list[i][1]=now_class_time.get(i);
            }

            able_class_list[i][2]=now_class_credit.get(i);
        }



        System.out.println("가능한 과목");
        for(int i = 0; i < now_class_no.size(); i++) {
            System.out.printf("%d %d\n", able_class_list[i][0], able_class_list[i][1]);
        }

        System.out.printf("\n가능한 과목 개수 : %d\n", now_class_no.size());
        dfs(0, now_class_no.size());
        int timetable_number = 1;
        System.out.println("표시");
        for (int i = 0; i < new_timetable.size(); i++) {
            String now_timetable_add = new_timetable.get(i);
            int credit = 0;
            for (int k = 0; k < now_timetable_add.length(); k++) {
                if (Integer.parseInt(now_timetable_add.substring(k, k + 1)) == 1) {
                    int new_add_class_credit = able_class_list[k][2];
                    credit += new_add_class_credit;
                    System.out.printf("credit add: %d %d", able_class_list[k][1], new_add_class_credit);
                }
            }
            System.out.printf("total credit: %d\n", credit);
            User_timetable user_timetable = new User_timetable();
            int class_num_check = 1;
            for (int k = 0; k < now_timetable_add.length(); k++) {
                if(Integer.parseInt(now_timetable_add.substring(k, k+1)) == 1) {
                    int new_add_class_no = able_class_list[k][0];
                    user_timetable.setClass(new_add_class_no,class_num_check);
                    class_num_check += 1;
                }
            }
            for (int k = class_num_check; k <= 9; k++) {
                user_timetable.setClass(-1,class_num_check);
                class_num_check += 1;
            }
            userTimetableRepository.save(user_timetable);
            System.out.println("DB ADD");
            timetable_number += 1;
        }
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
    }
}
