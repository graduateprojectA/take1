package com.board.back.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Table(name = "Majors")
@DynamicInsert
@DynamicUpdate
public class Majors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "major_no")
    private Integer major_no;

    @Column(name = "major_name")
    private String major_name;

    @Column(name = "collage_no")
    private Integer college_no;

    public Integer getNo() {
        return major_no;
    }
    public String getMajor_name() {
        return major_name;
    }
    public Integer getCollege_no() {
        return college_no;
    }

    public Majors() {
        super();
    }
    public Majors(Integer major_no, String major_name, Integer college_no) {
        super();
        this.major_no = major_no;
        this.major_name = major_name;
        this.college_no = college_no;
    }

    @Override
    public String toString() {
        return "Majors [no=" + major_no + ", major_name=" + major_name + ", college_no=" + college_no+ "]";
    }
}
