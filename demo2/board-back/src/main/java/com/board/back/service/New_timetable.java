package com.board.back.service;

public class New_timetable implements Comparable<New_timetable>{
    public int timetable_out_time[][];
    public int credit;
    public String new_timetable;

    public New_timetable(int timetable_out_time[][], int credit, String new_timetable) {
        this.timetable_out_time = timetable_out_time;
        this.credit = credit;
        this.new_timetable = new_timetable;
    }

    @Override
    public int compareTo(New_timetable o) {
        // TODO Auto-generated method stub
        if(this.credit < o.credit) {
            return -1;
        }else if (this.credit == o.credit) {
            return 0;
        } else {
            return 1;
        }
    }
}