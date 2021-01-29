package com.board.back.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TimeTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int table_number;
    private String week;
    private int period;
    private String course_name;
    private int division_number;
    private String professor_name;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public int getTable_number() {
        return table_number;
    }
    public void setTable_number(int table_number) {
        this.table_number = table_number;
    }
    public String getWeek() {
        return week;
    }
    public void setWeek(String week) {
        this.week = week;
    }
    public int getPeriod() {
        return period;
    }
    public void setPeriod(int period) {
        this.period = period;
    }
    public String getCourse_name() {
        return course_name;
    }
    public void setCourse_name(String course_name) {
        this.course_name = course_name;
    }
    public int getDivision_number() {
        return division_number;
    }
    public void setDivision_number(int division_number) {
        this.division_number = division_number;
    }
    public String getProfessor_name() {
        return professor_name;
    }
    public void setProfessor_name(String professor_name) {
        this.professor_name = professor_name;
    }
}
