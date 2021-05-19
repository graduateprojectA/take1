package com.board.back.model;

public class User_elective_timetable2 {
    private int timetable_no;
    private int class_no;
    private String class_name;
    private String class_time;

    public int getTimetable_no() {
        return timetable_no;
    }

    public void setTimetable_no(int timetable_no) {
        this.timetable_no = timetable_no;
    }

    public int getClass_no() {
        return class_no;
    }

    public void setClass_no(int class_no) {
        this.class_no = class_no;
    }

    public String getClass_name() {
        return class_name;
    }

    public void setClass_name(String class_name) {
        this.class_name = class_name;
    }

    public String getClass_time() {
        return class_time;
    }

    public void setClass_time(String class_time) {
        this.class_time = class_time;
    }

    public User_elective_timetable2(){super();}

    public User_elective_timetable2(int timetable_no, int class_no, String class_name, String class_time) {
        this.timetable_no = timetable_no;
        this.class_no = class_no;
        this.class_name = class_name;
        this.class_time = class_time;
    }

    @Override
    public String toString() {
        return "User_elective_timetable2{" +
                "timetable_no=" + timetable_no +
                ", class_no=" + class_no +
                ", class_name='" + class_name + '\'' +
                ", class_time='" + class_time + '\'' +
                '}';
    }
}
