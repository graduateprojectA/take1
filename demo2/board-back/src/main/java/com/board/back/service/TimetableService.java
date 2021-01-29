package com.board.back.service;

import com.board.back.model.Majors;
import com.board.back.model.TimeTable;
import com.board.back.model.User;
import com.board.back.model.User1_dropmajor;
import com.board.back.repository.MajorRepository;
import com.board.back.repository.TimetableRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Transactional
public class TimetableService {
    private final MajorRepository majorRepository;
    private final TimetableRepository timetableRepository;
    public TimetableService(MajorRepository majorRepository, TimetableRepository timetableRepository) {
        this.majorRepository = majorRepository;
        this.timetableRepository = timetableRepository;
    }

    public static ArrayList<String> table_name = new ArrayList<String>();
    public static ArrayList<String> table_time = new ArrayList<String>();
    public static ArrayList<String> table_professor = new ArrayList<String>();
    public static int []day_out=new int [10];
    public static ArrayList<Integer> out_time = new ArrayList<Integer>();
    public static ArrayList<String> name_out = new ArrayList<String>();
    public static ArrayList<Integer> div_out = new ArrayList<Integer>();
    public static ArrayList<Integer> flag_out = new ArrayList<Integer>();
    public static String[][][] real_table = new String[101][101][101];
    public static HashMap<String, Integer> duplicate_count = new HashMap<String, Integer>();
    public static int day1 = 100;
    public static int day2 = 100;
    public static int time1 = 100;
    public static int time2 = 100;
    public static int day3 = 100;
    public static int time3 = 100;
    public static String[][] name_table = new String[100][6];
    public int[] bunban = new int[6];
    public String[][] created_table = new String[100][6];
    public int[][] bunban_table = new int[100][6];
    public String[][] pname_table = new String[100][6];
    public static int []time_out=new int [10];
    public int q = 0;
    public String day = "";
    public String course_name = "";
    public String prof_name = "";

    public Long join(TimeTable timeTable) {
        timetableRepository.save(timeTable);
        return timeTable.getId();
    }
    public static int blank_check(int index) {
        int flag=0;
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 7; j++) {
                if (real_table[i][j][index] != null) {
                    int n = Integer.parseInt(real_table[i][j][index]);
                    if(name_table[index][n]==null) {
                        flag=1;
                        break;
                    }
                }
            }
        }
        return flag;
    }
    public void table_insert(int m) {
        int y=table_maker(created_table[m], m);
        int x=blank_check(m);
        if(y==0&&x==0){
            for (int i = 0; i < 5; i++) {
                for (int j = 0; j < 7; j++) {
                    if (real_table[i][j][m] != null) {
                        if (i == 0) {
                            day = "월";
                        } else if (i == 1) {
                            day = "화";
                        } else if (i == 2) {
                            day = "수";
                        } else if (i == 3) {
                            day = "목";
                        } else if (i == 4) {
                            day = "금";
                        }
                        int bun = 0;
                        int n = Integer.parseInt(real_table[i][j][m]);
                        course_name = name_table[m][n];
                        bun = bunban_table[m][n];
                        prof_name = pname_table[m][n];
                        TimeTable timeTable = new TimeTable();
                        timeTable.setTable_number(m+1);
                        timeTable.setWeek(day);
                        timeTable.setPeriod(j + 1);
                        timeTable.setCourse_name(course_name);
                        timeTable.setDivision_number(bun);
                        timeTable.setProfessor_name(prof_name);
                        join(timeTable);
                        System.out.println((m+1) + " " + day + " " + (j + 1) + " " + course_name + " " + bun + " " + prof_name);
                    }
                }
            }
        }
    }
    public static int table_maker(String[] semi_table, int table2_number) {
        int flag=0;
        String x = Integer.toString(out_time.get(1));
        for (int i = 0; i < 6; i++) {
            if (semi_table[i].length() == 2) {
                day1 = (Integer.parseInt(semi_table[i].substring(0, 1)) - 1);
                time1 = (Integer.parseInt(semi_table[i].substring(1, 2)) - 1);
                for(int j=0;j<x.length();j++) {
                    if(j%2==0) {
                        if(day_out[j]==(day1+1)&&time_out[j+1]==(time1+1)) {
                            //System.out.println(day1+" "+time1);
                            flag=1;
                        }
                    }
                }
                real_table[day1][time1][table2_number] = Integer.toString(i);
            } else if (semi_table[i].length() == 4) {
                day1 = (Integer.parseInt(semi_table[i].substring(0, 1)) - 1);
                time1 = (Integer.parseInt(semi_table[i].substring(1, 2)) - 1);
                day2 = (Integer.parseInt(semi_table[i].substring(2, 3)) - 1);
                time2 = (Integer.parseInt(semi_table[i].substring(3, 4)) - 1);
                for(int j=0;j<x.length();j++) {
                    if(j%2==0) {
                        if(day_out[j]==(day1+1)&&time_out[j+1]==(time1+1)) {
                            //System.out.println(day1+" "+time1);
                            flag=1;
                        }if(day_out[j]==(day2+1)&&time_out[j+1]==(time2+1)) {
                            //System.out.println(day2+" "+time2);
                            flag=1;
                        }
                    }
                }
                real_table[day1][time1][table2_number] = Integer.toString(i);
                real_table[day2][time2][table2_number] = Integer.toString(i);
            } else if (semi_table[i].length() == 6) {
                day1 = (Integer.parseInt(semi_table[i].substring(0, 1)) - 1);
                time1 = (Integer.parseInt(semi_table[i].substring(1, 2)) - 1);
                day2 = (Integer.parseInt(semi_table[i].substring(2, 3)) - 1);
                time2 = (Integer.parseInt(semi_table[i].substring(3, 4)) - 1);
                day3 = (Integer.parseInt(semi_table[i].substring(4, 5)) - 1);
                time3 = (Integer.parseInt(semi_table[i].substring(5, 6)) - 1);
                for(int j=0;j<x.length();j++) {
                    if(j%2==0) {
                        if(day_out[j]==(day1+1)&&time_out[j+1]==(time1+1)) {
                            //System.out.println(day1+" "+time1);
                            flag=1;
                        }if(day_out[j]==(day2+1)&&time_out[j+1]==(time2+1)) {
                            //System.out.println(day2+" "+time2);
                            flag=1;
                        }if(day_out[j]==(day3+1)&&time_out[j+1]==(time3+1)) {
                            //System.out.println(day3+" "+time3);
                            flag=1;
                        }
                    }
                }
                real_table[day1][time1][table2_number] = Integer.toString(i);
                real_table[day2][time2][table2_number] = Integer.toString(i);
                real_table[day3][time3][table2_number] = Integer.toString(i);
            }
        }return flag;
    }

    public List<Majors> findMajor() {
        for (Majors value : majorRepository.findByRT(32)) {
            table_name.add(value.getMajor_name());
            table_time.add(Integer.toString(value.getThis_time()));
            table_professor.add(value.getProfessor_name());
        }
        for (User value : majorRepository.findNoTime()) {
            out_time.add(value.getTime_out());
        }
        for (User1_dropmajor value : majorRepository.findNoThing()) {
            name_out.add(value.getMajor_name());
            div_out.add(value.getDivision_number());
            flag_out.add(value.getFlag());
        }
        String x = Integer.toString(out_time.get(2));
        for(int i=0;i<x.length();i++) {
            if(i%2==1) {
                time_out[i]=Integer.parseInt(x.substring(i, i+1));
            }else {
                day_out[i]=Integer.parseInt(x.substring(i, i+1));
            }
        }
        int []out_list=new int[10];
        int j=0;
        for(int i=0;i<flag_out.size();i++) {
            if(flag_out.get(i)==0) {
                table_name.set(i,null);
            }
        }
        for (int m = 0; m < table_name.size(); m++) { // ArrayList 만큼 반복
            if (table_name.get(m) != null) {
                if (duplicate_count.containsKey(table_name.get(m))) { // HashMap 내부에 이미 key 값이 존재하는지 확인
                    duplicate_count.put(table_name.get(m), duplicate_count.get(table_name.get(m)) + 1); // key가 이미 있다면
                    // value에 +1
                } else { // key값이 존재하지 않으면
                    duplicate_count.put(table_name.get(m), 1); // key 값을 생성후 value를 1로 초기화
                }
            }
        }

        for (Map.Entry<String, Integer> entry : duplicate_count.entrySet()) {
            bunban[q] = entry.getValue();
            q++;
        }
        q = 0;

        for (int i = 0; i < 2; i++) {
            for (j = 0; j < 1; j++) {
                for (int k = 0; k < 3; k++) {
                    for (int l = 0; l < 1; l++) {
                        for (int m = 0; m < 1; m++) {
                            for (int n = 0; n < 1; n++) {
                                created_table[q][0] = table_time.get(7 + i);
                                name_table[q][0] = table_name.get(7 + i);
                                bunban_table[q][0] = (1 + i);
                                pname_table[q][0] = table_professor.get(7 + i);
                                created_table[q][1] = table_time.get(5 + j);
                                name_table[q][1] = table_name.get(5 + j);
                                bunban_table[q][1] = (1 + j);
                                pname_table[q][1] = table_professor.get(5 + j);
                                created_table[q][2] = table_time.get(1 + k);
                                name_table[q][2] = table_name.get(1 + k);
                                bunban_table[q][2] = (1 + k);
                                pname_table[q][2] = table_professor.get(1 + k);
                                created_table[q][3] = table_time.get(l);
                                name_table[q][3] = table_name.get(l);
                                bunban_table[q][3] = (1 + l);
                                pname_table[q][3] = table_professor.get(l);
                                created_table[q][4] = table_time.get(4 + m);
                                name_table[q][4] = table_name.get(4 + m);
                                bunban_table[q][4] = (1 + m);
                                pname_table[q][4] = table_professor.get(4 + m);
                                created_table[q][5] = table_time.get(6 + n);
                                name_table[q][5] = table_name.get(6 + n);
                                bunban_table[q][5] = (1 + n);
                                pname_table[q][5] = table_professor.get(6 + n);
                                q++;
                            }
                        }
                    }
                }
            }
        }

        table_insert(0);
        table_insert(1);
        table_insert(2);
        table_insert(3);
        table_insert(4);
        table_insert(5);
        return majorRepository.findAll();
    }
}
