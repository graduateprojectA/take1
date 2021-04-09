package com.board.back.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class newClass {
    private Integer class_no;
    private String class_name;
    private Integer course_id;
    private String professor_name;
    private Integer class_division;
    private Integer class_time;
    private Integer exam_per;
    private Integer quiz_per;
    private Integer presentation_per;
    private Integer project_per;
    private Integer assignment_per;
    private Integer attendance_per;
    private Integer extra_per;
    private Integer mid_plan;
    private Integer final_plan;
    private String extra_plan;
    private String class_location;

    public Integer getClass_no() {
        return class_no;
    }

    public void setClass_no(Integer no) {
        this.class_no = no;
    }

    public Integer getCourse_id() {
        return course_id;
    }

    public void setCourse_id(Integer id) {
        this.course_id = id;
    }

    public String getClass_name() {
        return class_name;
    }

    public void setClass_name(String name) {
        this.class_name = name;
    }

    public String getProfessor_name() {
        return professor_name;
    }

    public void setProfessor_name(String name) {
        this.professor_name = name;
    }

    public Integer getClass_division() {
        return class_division;
    }

    public void setClass_division(Integer num) {
        this.class_division = num;
    }

    public Integer getClass_time() {
        return class_time;
    }

    public void setClass_time(Integer time) {
        this.class_time = time;
    }

    public Integer getExam_per() {
        return exam_per;
    }

    public void setExam_per(Integer no) {
        this.exam_per = exam_per;
    }

    public Integer getQuiz_per() {
        return quiz_per;
    }

    public void setQuiz_per(Integer no) {
        this.quiz_per = no;
    }

    public Integer getPresentation_per() {
        return presentation_per;
    }

    public void setPresentation_per(Integer no) {
        this.presentation_per = presentation_per;
    }

    public Integer getProject_per() {
        return project_per;
    }

    public void setProject_per(Integer no) {
        this.project_per = project_per;
    }

    public Integer getAssignment_per() {
        return assignment_per;
    }

    public void setAssignment_per(Integer no) {
        this.assignment_per = assignment_per;
    }

    public Integer getAttendance_per() {
        return attendance_per;
    }

    public void setAttendance_per(Integer no) {
        this.attendance_per = attendance_per;
    }

    public Integer getExtra_per() {
        return extra_per;
    }

    public void setExtra_per(Integer no) {
        this.extra_per = no;
    }

    public Integer getMid_plan() {
        return mid_plan;
    }

    public void setMid_plan(Integer no) {
        this.mid_plan = no;
    }

    public Integer getFinal_plan() {
        return final_plan;
    }

    public void setFinal_plan(Integer no) {
        this.final_plan = no;
    }

    public String getExtra_plan() {
        return extra_plan;
    }

    public void setExtra_plan(String a) {
        this.extra_plan = a;
    }

    public String getClass_location() {
        return class_location;
    }

    public void setClass_location(String a) {
        this.class_location = a;
    }

    //임시 field_no
    private Integer field_no;

    public Integer getField_no() {
        return field_no;
    }

    public void setField_no(Integer a) {
        this.field_no = a;
    }

    public newClass() {
        super();
    }


    public newClass(Integer class_no, Integer course_id, String class_name, String professor_name,
                    Integer class_division, Integer class_time, Integer exam_per, Integer quiz_per,
                    Integer presentation_per, Integer project_per, Integer assignment_per, Integer attendance_per,
                    Integer extra_per, Integer mid_plan, Integer final_plan, String extra_plan,
                    String class_location, Integer field_no) {
        super();
        this.class_no = class_no;
        this.course_id = course_id;
        this.class_name = class_name;
        this.professor_name = professor_name;
        this.class_division = class_division;
        this.class_time = class_time;
        this.exam_per = exam_per;
        this.quiz_per = quiz_per;
        this.presentation_per = presentation_per;
        this.project_per = project_per;
        this.assignment_per = assignment_per;
        this.attendance_per = attendance_per;
        this.extra_per = extra_per;
        this.mid_plan = mid_plan;
        this.final_plan = final_plan;
        this.extra_plan = extra_plan;
        this.class_location = class_location;
        this.field_no = field_no;
    }

    @Override
    public String toString() {
        return "Class [class_no=" + class_no + ", course_id=" + course_id + ", class_name=" + class_name
                + ", professor_name=" + professor_name + ", class_division=" + class_division
                + ", class_time=" + class_time + ", exam_per=" + exam_per + ", quiz_per=" + quiz_per
                + ", presentation_per=" + presentation_per + ", project_per=" + project_per
                + ", assignment_per=" + assignment_per + ", attendance_per=" + attendance_per
                + ", extra_per=" + extra_per + ", mid_plan=" + mid_plan + ", final_plan=" + final_plan
                + ", extra_plan=" + extra_plan + ", class_location=" + class_location + ", field_no="
                + field_no + "]";
    }
}
