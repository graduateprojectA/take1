package com.board.back.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

//    create table User_elective_timetable(
//        user_elective_timetable_no int auto_increment primary key,
//        timetable_number int not null,
//        class_no int not null,
//        user_no int not null,

@Entity
@Table(name = "User_elective_timetable")
@DynamicInsert
@DynamicUpdate

public class User_elective_timetable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="user_elective_timetable_no")
    private int user_elective_timetable_no;

    @Column(name ="timetable_number")
    private int timetable_number;

    @Column(name ="class_no")
    private int class_no;

    @Column(name = "user_no")
    private int user_no;

    public int getUser_elective_timetable_no() { return user_elective_timetable_no;}
    public void setUser_elective_timetable_no(int no) { this.user_elective_timetable_no = no;}
    public int getTimetable_number() {
        return timetable_number;
    }
    public void setTimetable_number(int no) {
        this.timetable_number = no;
    }
    public int getClass_no() {return class_no;}
    public void setClass_no(int no) {this.class_no = no;}
    public int getUser_no() {return user_no;}
    public void setUser_no(int no) {this.user_no = no;}

    public User_elective_timetable() {
        super();
    }
    public User_elective_timetable(int user_elective_timetable_no, int timetable_number,
                                   int class_no, int user_no) {
        super();
        this.user_elective_timetable_no = user_elective_timetable_no;
        this.timetable_number = timetable_number;
        this.class_no = class_no;
        this.user_no = user_no;
    }

    @Override
    public String toString() {
        return "User_elective_timetable [user_elective_timetable_no=" + user_elective_timetable_no
                + " , timetable_number=" + timetable_number + ", class_no=" + class_no
                + ", user_no=" + user_no + "]";
    }
}


