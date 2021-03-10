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
@Table(name = "User_time")
@DynamicInsert
@DynamicUpdate
public class User_time {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // 인덱스
    @Column(name = "time_id")
    private Integer time_id;

    @Column(name = "user_no")
    private Integer user_no;

    @Column(name = "time_mon")
    private Integer time_mon;

    @Column(name = "time_tue")
    private Integer time_tue;

    @Column(name = "time_wed")
    private Integer time_wed;

    @Column(name = "time_thr")
    private Integer time_thr;

    @Column(name = "time_fri")
    private Integer time_fri;

    public Integer getTime_id() {
        return time_id;
    }

    public void setTime_id(Integer no) {
        this.time_id = no;
    }

    public Integer getUser_no() {
        return user_no;
    }

    public void setUser_no(Integer no) {
        this.user_no = no;
    }

    public Integer getTime_mon() {
        return time_mon;
    }

    public void setTime_mon(Integer no) {
        this.time_mon = no;
    }

    public Integer getTime_tue() {
        return time_tue;
    }

    public void setTime_tue(Integer no) {
        this.time_tue = no;
    }

    public Integer getTime_wed() {
        return time_wed;
    }

    public void setTime_wed(Integer no) {
        this.time_wed = no;
    }

    public Integer getTime_thr() {
        return time_thr;
    }

    public void setTime_thr(Integer no) {
        this.time_thr = no;
    }

    public Integer getTime_fri() {
        return time_fri;
    }

    public void setTime_fri(Integer no) {
        this.time_fri = no;
    }

    public User_time(Integer time_id, Integer user_no, Integer time_mon, Integer time_tue, Integer time_wed,
            Integer time_thr, Integer time_fri) {
        super();
        this.time_id = time_id;
        this.user_no = user_no;
        this.time_mon = time_mon;
        this.time_tue = time_tue;
        this.time_wed = time_wed;
        this.time_thr = time_thr;
        this.time_fri = time_fri;
    }

    @Override
    public String toString() {
        return "User_time [time_id=" + time_id + " , user_no=" + user_no + ", mon=" + time_mon + ", tue=" + time_tue
                + ", wed=" + time_wed + ", thr=" + time_thr + ", fri=" + time_fri + "]";
    }
}
