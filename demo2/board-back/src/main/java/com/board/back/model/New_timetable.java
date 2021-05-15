package com.board.back.model;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name = "new_timetable")
@DynamicInsert
@DynamicUpdate
public class New_timetable implements Comparable<New_timetable>{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //인덱스
    @Column(name ="timetable_out_time")
    private int [][]timetable_out_time;

    @Column(name ="credit")
    private Integer credit;

    @Column(name ="new_timetable")
    private String new_timetable;

    public int[][] getTimetable_out_time() {
        return timetable_out_time;
    }
    public void setTimetable_out_time(int[][] no) {
        this.timetable_out_time = no;
    }
    public Integer getCredit() {
        return credit;
    }
    public void setCredit(Integer no) {
        this.credit= no;
    }
    public String getNew_timetable() {
        return new_timetable;
    }
    public void setNew_timetable(String no) {
        this.new_timetable = no;
    }

    public New_timetable(int timetable_out_time[][], Integer credit, String new_timetable) {
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

    @Override
    public String toString() {
        return "class_character [credit=" + credit + ", new_timetable=" +new_timetable+ "]";
    }
}
