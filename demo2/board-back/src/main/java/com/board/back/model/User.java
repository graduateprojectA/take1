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
@Table(name = "User")
@DynamicInsert
@DynamicUpdate

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_no;

    // 아이디(학번)
    @Column(name = "user_id")
    private Integer user_id;

    // 비밀번호
    @Column(name = "user_pw")
    private String user_pw;

    // 전공
    @Column(name = "user_major")
    private Integer user_major;

    // 학년
    @Column(name = "user_grade")
    private Integer user_grade;

    public Integer getNo() {
        return user_no;
    }

    public void setNo(Integer no) {
        this.user_no = no;
    }

    public Integer getId() {
        return user_id;
    }

    public void setId(Integer id) {
        this.user_id = id;
    }

    public String getPassword() {
        return user_pw;
    }

    public void setPassword(String password) {
        this.user_pw = password;
    }

    public Integer getMajor() {
        return user_major;
    }

    public void setMajor(Integer major) {
        this.user_major = major;
    }

    public Integer getGrade() {
        return user_grade;
    }

    public void setGrade(Integer grade) {
        this.user_grade = grade;
    }


    public User() {
        super();
    }
    public User(Integer user_no, Integer user_id, String user_pw, Integer user_major, Integer user_grade) {
        super();
        this.user_no = user_no;
        this.user_id = user_id;
        this.user_pw = user_pw;
        this.user_major = user_major;
        this.user_grade = user_grade;
    }

    @Override
    public String toString() {
        return "User [no=" + user_no + ", id=" + user_id + ", password=" + user_pw + ", major=" + user_major
                + ", grade=" + user_grade + "]";
    }
}