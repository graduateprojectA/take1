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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="user_timetable_no")
    private Integer user_timetable_no;

    @Column(name = "user_no")
    private Integer user_no;

    @Column(name = "class_1")
    private Integer class_1;

    @Column(name = "class_2")
    private Integer class_2;

    @Column(name = "class_3")
    private Integer class_3;

    @Column(name = "class_4")
    private Integer class_4;

    @Column(name = "class_5")
    private Integer class_5;

    @Column(name = "class_6")
    private Integer class_6;

    @Column(name = "class_7")
    private Integer class_7;

    @Column(name = "class_8")
    private Integer class_8;

    @Column(name = "class_9")
    private Integer class_9;

    @Column(name = "credit")
    private Integer credit;

    public Integer getUser_timetable_no() { return user_timetable_no;}
    public void setUser_timetable_no(Integer no) { this.user_timetable_no = no;}

    public void setClass(Integer no, int index) {
        if(index==1){
            this.class_1= no;
        }else if(index==2){
            this.class_2= no;
        }else if(index==3){
            this.class_3= no;
        }else if(index==4){
            this.class_4= no;
        }else if(index==5){
            this.class_5= no;
        }else if(index==6){
            this.class_6= no;
        }else if(index==7){
            this.class_7= no;
        }else if(index==8){
            this.class_8= no;
        }else if(index==9){
            this.class_9= no;
        }
    }
    public Integer getClass_1() {return class_1;}
    public Integer getClass_2() {return class_2;}
    public Integer getClass_3() {return class_3;}
    public Integer getClass_4() {return class_4;}
    public Integer getClass_5() {return class_5;}
    public Integer getClass_6() {return class_6;}
    public Integer getClass_7() {return class_7;}
    public Integer getClass_8() {return class_8;}
    public Integer getClass_9() {return class_9;}

    public User_timetable() {
        super();
    }
    public User_timetable(Integer user_timetable_no, Integer user_no, Integer class_1,Integer class_2,Integer class_3,
                          Integer class_4,Integer class_5,Integer class_6,Integer class_7,Integer class_8,Integer class_9,
                          Integer credit) {
        super();
        this.user_timetable_no = user_timetable_no;
        this.class_1=class_1;
        this.class_2=class_2;
        this.class_3=class_3;
        this.class_4=class_4;
        this.class_5=class_5;
        this.class_6=class_6;
        this.class_7=class_7;
        this.class_8=class_8;
        this.class_9=class_9;
        this.credit = credit;
    }

    @Override
    public String toString() {
        return "User_timetable [user_timetable_no=" + user_timetable_no + ", user_no=" + user_no
                +", class_1="+ class_1+", class_2="+ class_2+", class_3="+ class_3+", class_4="+ class_4
                +", class_5="+ class_5+", class_6="+ class_6+", class_7="+ class_7+", class_8="+ class_8
                +", class_9="+ class_9+ ", credit=" + credit + "]";
    }
}
