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
@Table(name = "Course")
@DynamicInsert
@DynamicUpdate
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="course_no")
    private Integer course_no;

    @Column(name = "major_no")
    private Integer major_no;

    @Column(name = "field_no")
    private Integer field_no;

    @Column(name = "course_id")
    private Integer course_id;

    @Column(name = "course_name")
    private String course_name;

    @Column(name = "course_grade")
    private Integer course_grade;

    @Column(name = "course_semester")
    private Integer course_semester;

    @Column(name = "course_hours")
    private Float course_hours;

    @Column(name = "course_credit")
    private Integer course_credit;

    @Column(name = "pre_course_id")
    private Integer pre_course_id;

    public Integer getCourse_no() {
        return course_no;
    }
    public Integer getMajor_no() {
        return major_no;
    }
    public Integer getField_no() {
        return field_no;
    }
    public Integer getCourse_id() {
        return course_id;
    }
    public String getCourse_name() {return course_name;}
    public Integer getCourse_grade() {return course_grade;}
    public Integer getCourse_semester() {return course_semester;}
    public Float getCourse_hours() {return course_hours;}
    public Integer getCourse_credit() {return course_credit;}
    public Integer getPre_course_id() {return pre_course_id;}
    public Course() {
        super();
    }
    public Course(Integer course_no, Integer major_no, Integer field_no, Integer course_id,
                  String course_name, Integer course_grade, Integer course_semester, Float course_hours,
                  Integer course_credit, Integer pre_course_id) {
        super();
        this.course_no = course_no;
        this.major_no = major_no;
        this.field_no = field_no;
        this.course_id = course_id;
        this.course_name = course_name;
        this.course_grade = course_grade;
        this.course_semester = course_semester;
        this.course_hours = course_hours;
        this.course_credit = course_credit;
        this.pre_course_id = pre_course_id;
    }
    @Override
    public String toString() {
        return "Course [course_no=" + course_no + ", major_no=" + major_no + ", field_no=" + field_no
                + ", course_id=" + course_id + ", course_name=" + course_name + ", course_grade=" + course_grade
                + ", course_semester=" + course_semester + ", course_hours=" + course_hours
                + ", course_credit=" + course_credit + ", pre_course_id=" + pre_course_id + "]";
    }
}
