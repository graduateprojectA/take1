package com.board.back.service;

import java.util.ArrayList;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class TimetableService {
    static int out_time[][] = new int[5][7];
    static int user_no = 7;
    static int major_no = 0;
    static ArrayList<class_character> able_class_list = new ArrayList<class_character> ();
    static int dfs_array[] = new int[10000];
    static ArrayList<String> new_timetable = new ArrayList<String> ();

    static int class_check[] = new int[100];
    static int class_equal_check[] = new int[3000];

    public static void dfs(int v, int n) {
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
                        class_character now_class = able_class_list.get(i);
                        int now_credit = now_class.class_credit;
                        int now_time = now_class.class_time;
                        int now_no = now_class.class_no;

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
                            class_character now_class = able_class_list.get(i);
                            String now_time = Integer.toString(now_class.class_time);
                            int now_class_no = now_class.class_no;

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
    public static void main(String[] args) {
        Connection conn = null;
        Statement state = null;
        ResultSet resset = null;
        ResultSet resset2 = null;
        ResultSet resset3 = null;
        ResultSet resset4 = null;
        PreparedStatement pstmt = null;
        PreparedStatement pstmt2 = null;
        PreparedStatement pstmt3 = null;
        PreparedStatement pstmt4 = null;

        int time_mon = 0, time_tue = 0, time_wed = 0, time_thr = 0, time_fri = 0;
        String url = "jdbc:mysql://localhost:3306/graduate?&serverTimezone=UTC";
        String sql = "";
        String sql2 = "";
        String sql3 = "";
        String sql4 = "";

        try {
            conn = DriverManager.getConnection(url, "root", "1234");
            state = conn.createStatement();
            // major_no 占쌉력뱄옙占쏙옙
            sql = "select major_no from Majors, User where Majors.major_name = User.user_major and User.user_no = " + user_no;
            pstmt = conn.prepareStatement(sql);
            resset = state.executeQuery(sql);
            while(resset.next()) {
                major_no = resset.getInt("major_no");
                System.out.printf("%d", major_no);
            }resset.close();

            sql2 = "select * from User_time where user_no = " + user_no;
            pstmt2 = conn.prepareStatement(sql2);
            resset2 = state.executeQuery(sql2);
            while(resset2.next()) {
                time_mon = resset2.getInt("time_mon");
                time_tue = resset2.getInt("time_tue");
                time_wed = resset2.getInt("time_wed");
                time_thr = resset2.getInt("time_thr");
                time_fri = resset2.getInt("time_fri");
            }resset.close();

            // 占쏙옙占쏙옙微占� 占쏙옙占쏙옙占쏙옙 占싫되댐옙 占시곤옙 占썼열占쏙옙 占쏙옙占쏙옙
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

            // User_class占쏙옙占쏙옙 占시곤옙占실댐옙 占쏙옙占쏙옙 찾占쏙옙
            sql3 = "select user_class.class_no, class.class_time, class.class_credit from Class, User_class where User_class.class_pre = False and User_class.class_next = True and User_class.user_no = " + user_no + " and Class.class_no = User_class.class_no";
            pstmt3 = conn.prepareStatement(sql3);
            resset3 = state.executeQuery(sql3);
            while(resset3.next()) {
                int now_class_no = resset3.getInt("class_no");
                int now_class_time = resset3.getInt("class_time");
                int now_class_credit = resset3.getInt("class_credit");
                class_character now_class = new class_character(now_class_no, now_class_time, now_class_credit);
                able_class_list.add(now_class);
            }resset.close();

            System.out.println("가능한 과목");
            for(int i = 0; i < able_class_list.size(); i++) {
                System.out.printf("%d %d\n", able_class_list.get(i).class_no, able_class_list.get(i).class_credit);
            }

            System.out.printf("\n가능한 과목 개수 : %d\n", able_class_list.size());

            dfs(0, able_class_list.size());

            int timetable_number = 1;
            for (int i = 0; i < new_timetable.size(); i++) {
                String now_timetable_add = new_timetable.get(i);
                int credit = 0;
                for (int k = 0; k < now_timetable_add.length(); k++) {
                    if(Integer.parseInt(now_timetable_add.substring(k, k+1)) == 1) {
                        class_character new_add_class = able_class_list.get(k);
                        int new_add_class_credit = new_add_class.class_credit;
                        credit += new_add_class_credit;
                        System.out.printf("credit add: %d %d", new_add_class.class_no, new_add_class_credit);
                    }
                }
                System.out.printf("total credit: %d\n", credit);

                sql4 = "insert into graduate.user_timetable (user_no, class_1, class_2, class_3, class_4, class_5, class_6, class_7, class_8, class_9, credit) values(" + user_no + ", ?, ?, ?, ?, ?, ?, ?, ?, ?, " + credit + ");";
                pstmt4 = conn.prepareStatement(sql4);
                int class_num_check = 1;
                for (int k = 0; k < now_timetable_add.length(); k++) {
                    if(Integer.parseInt(now_timetable_add.substring(k, k+1)) == 1) {
                        class_character new_add_class = able_class_list.get(k);
                        int new_add_class_no = new_add_class.class_no;
                        pstmt4.setInt(class_num_check, new_add_class_no);
                        class_num_check += 1;
                    }
                }
                for (int k = class_num_check; k <= 9; k++) {
                    pstmt4.setInt(class_num_check, -1);
                    class_num_check += 1;
                }
                pstmt4.executeUpdate();
                System.out.println("DB ADD");
                timetable_number += 1;
            }
            System.out.printf("총 시간표 개수 : %d\n", timetable_number - 1);
        }catch(SQLException e) {
            System.out.print("error: " + e);
        }finally {
            if(resset != null) {
                try {
                    pstmt2.close();
                }catch(SQLException e) {
                    e.printStackTrace();
                }
            }
            if(state != null) {
                try {
                    state.close();
                }catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(conn != null) {
                try {
                    conn.close();
                } catch(SQLException e){
                    e.printStackTrace();
                }
            }
        }
    }
}
