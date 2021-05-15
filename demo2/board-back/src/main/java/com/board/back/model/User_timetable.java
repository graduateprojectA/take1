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
    private int user_timetable_no;

    @Column(name = "user_no")
    private int user_no;

    @Column(name = "class_1")
    private int class_1;

    @Column(name = "class_2")
    private int class_2;

    @Column(name = "class_3")
    private int class_3;

    @Column(name = "class_4")
    private int class_4;

    @Column(name = "class_5")
    private int class_5;

    @Column(name = "class_6")
    private int class_6;

    @Column(name = "class_7")
    private int class_7;

    @Column(name = "class_8")
    private int class_8;

    @Column(name = "class_9")
    private int class_9;

    @Column(name = "credit")
    private int credit;

    public void setUser_timetable_no(int no) { this.user_timetable_no = no;}
    public int getUser_timetable_no() { return user_timetable_no;}
    public void setUser_no(int no) { this.user_no = no;}
    public int getUser_no() { return user_no;}
    public void setCredit(int no) { this.credit = no;}
    public int getCredit() { return credit;}
    public void setClass(int no, int index) {
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
    public int getClass_1() {return class_1;}
    public int getClass_2() {return class_2;}
    public int getClass_3() {return class_3;}
    public int getClass_4() {return class_4;}
    public int getClass_5() {return class_5;}
    public int getClass_6() {return class_6;}
    public int getClass_7() {return class_7;}
    public int getClass_8() {return class_8;}
    public int getClass_9() {return class_9;}

    public User_timetable() {
        super();
    }
    public User_timetable(int user_timetable_no, int user_no, int class_1,int class_2,int class_3,
                          int class_4,int class_5,int class_6,int class_7,int class_8,int class_9,
                          int credit) {
        super();
        this.user_timetable_no = user_timetable_no;
        this.user_no = user_no;
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
