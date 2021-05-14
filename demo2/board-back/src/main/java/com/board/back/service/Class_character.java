package com.board.back.service;

public class Class_character implements Comparable<Class_character>{
    public int class_no;
    public int class_time;
    public int class_credit;
    public int course_id;

    public Class_character(int class_no, int class_time, int class_credit, int course_id) {
        this.class_no = class_no;
        this.class_time = class_time;
        this.class_credit = class_credit;
        this.course_id = course_id;
    }

    public int getClass_no() {
        return class_no;
    }

    public void setClass_no(int class_no) {
        this.class_no = class_no;
    }

    public int getClass_time() {
        return class_time;
    }

    public void setClass_time(int class_time) {
        this.class_time = class_time;
    }

    public int getClass_credit() {
        return class_credit;
    }

    public void setClass_credit(int class_credit) {
        this.class_credit = class_credit;
    }

    public int getCourse_id() {
        return course_id;
    }

    public void setCourse_id(int course_id) {
        this.course_id = course_id;
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
