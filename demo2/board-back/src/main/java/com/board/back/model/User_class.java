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
@Table(name = "User_class")
@DynamicInsert
@DynamicUpdate

public class User_class {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //인덱스
    @Column(name ="user_class_no")
    private Integer user_class_no;

    @Column(name = "user_no")
    private Integer user_no;

    @Column(name = "class_no")
    private Integer class_no;

    @Column(name="class_pre")
    private Boolean class_pre;

    @Column(name="class_next")
    private Boolean class_next;


    public Integer getUser_class_no(){ return user_class_no; }

    public void setUser_class_no(Integer no) {
        this.user_class_no = no;
    }

    public Integer getUser_no() {
        return user_no;
    }

    public void setUser_no(Integer no) {
        this.user_no = no;
    }

    public Integer getClass_no() {
        return class_no;
    }

    public void setClass_no(Integer no) {
        this.class_no = no;
    }

    public Boolean getClass_pre() {return class_pre;}

    public void setClass_pre(Boolean answer) {this.class_pre = answer;}

    public Boolean getClass_next() {return class_next;}

    public void setClass_next(Boolean answer) {this.class_next = answer;}


    public User_class() {
        super();
    }
    public User_class(Integer user_class_no, Integer user_no, Integer class_no, Boolean class_pre, Boolean class_next) {
        super();
        this.user_class_no = user_class_no;
        this.user_no = user_no;
        this.class_no = class_no;
        this.class_pre = class_pre;
        this.class_next = class_next;
    }

    @Override
    public String toString() {
        return "User_class [user_class_no=" + user_class_no + " , user_no=" + user_no + ", class_no=" + class_no
                + ", class_pre=" + class_pre + ", class_next=" + class_next + "]";
    }
}
