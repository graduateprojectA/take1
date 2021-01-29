package com.board.back.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;
    private String user_pw;
    private String user_major;
    private int user_credit;
    private int user_grade;
    private int time_out;

    public int getId() {
        return user_id;
    }
    public String getPassword() {
        return user_pw;
    }
    public String getMajor() {
        return user_major;
    }
    public int getUser_credit() {
        return user_credit;
    }
    public int getUser_grade() {
        return user_grade;
    }
    public int getTime_out() { return time_out; }
}
