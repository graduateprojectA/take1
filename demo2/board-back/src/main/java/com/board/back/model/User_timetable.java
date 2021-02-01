package com.board.back.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

//유저테이블
@Entity
@Table(name = "User_timetable")
@DynamicInsert
@DynamicUpdate

public class User_timetable {
    @Column(name ="user_timetable_no")
    private Integer user_timetable_no;

    @Column(name ="timetable_number")
    private Integer timetable_number;

    @Column(name ="class_no")
    private Integer class_no;

    @Column(name = "user_no")
    private Integer user_no;

    @Column(name = "credit")
    private Integer credit;


    public Integer getUser_timetable_no() { return user_timetable_no;}

    public void setUser_timetable_no(Integer no) { this.user_timetable_no = no;}

    public Integer getTimetable_number() {
        return timetable_number;
    }

    public void setTimetable_number(Integer no) {
        this.timetable_number = no;
    }

    public Integer getClass_no() {return class_no;}

    public void setClass_no(Integer no) {this.class_no = no;}

    public Integer getUser_no() {return user_no;}

    public void setUser_no(Integer no) {this.user_no = no;}

    public Integer getCredit() {return credit;}

    public void setCredit(Integer credit) {this.credit = credit;}


    @Override
    public String toString() {
        return "User_timetable [user_timetable_no=" + user_timetable_no + " , timetable_number=" + timetable_number
                + ", class_no=" + class_no + ", user_no=" + user_no + ", credit=" + credit + "]";
    }
}
