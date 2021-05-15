package com.board.back.model;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name = "class_character")
@DynamicInsert
@DynamicUpdate
public class Class_character implements Comparable<Class_character>{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //인덱스
    @Column(name ="class_no")
    private Integer class_no;

    @Column(name ="class_time")
    private Integer class_time;

    @Column(name ="course_id")
    private Integer course_id;

    @Column(name ="class_credit")
    private Integer class_credit;

    public Integer getClass_no() {
        return class_no;
    }
    public void setClass_no(Integer no) {
        this.class_no = no;
    }
    public Integer getClass_time() {
        return class_time;
    }
    public void setClass_time(Integer no) {
        this.class_time = no;
    }
    public Integer getCourse_id() {
        return course_id;
    }
    public void setCourse_id(Integer no) {
        this.course_id = no;
    }
    public Integer getClass_credit() {
        return class_credit;
    }
    public void setClass_credit(Integer no) { this.class_credit = no;}

    public Class_character() {
        super();
    }
    public Class_character(Integer class_no, Integer course_id, Integer class_time, Integer class_credit) {
        this.class_no = class_no;
        this.course_id = course_id;
        this.class_time = class_time;
        this.class_credit = class_credit;
    }
    @Override
    public String toString() {
        return "class_character [class_no=" + class_no + ", course_id=" +course_id+ "class_time=" + class_time
                + ", class_credit=" + class_credit +  "]";
    }

    @Override
    public int compareTo(Class_character o) {
        // TODO Auto-generated method stub
        if(this.class_credit < o.class_credit) {
            return -1;
        }else if (this.class_credit == o.class_credit) {
            return 0;
        } else {
            return 1;
        }
    }
}
