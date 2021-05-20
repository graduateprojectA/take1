package com.board.back.model;

public class Class2 {
    private Integer class_no;
    private String class_name;
    private Integer course_id;
    private String professor_name;
    private Integer class_division;
    private Integer class_time;
    private String class_grade;
    private Integer class_credit;
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
    private Integer field_no;

    public Class2() {super();}

    public Class2(Integer class_no, String class_name, Integer course_id, String professor_name, Integer class_division, Integer class_time, String class_grade, Integer class_credit, Integer exam_per, Integer quiz_per, Integer presentation_per, Integer project_per, Integer assignment_per, Integer attendance_per, Integer extra_per, Integer mid_plan, Integer final_plan, String extra_plan, String class_location, Integer field_no) {
        this.class_no = class_no;
        this.class_name = class_name;
        this.course_id = course_id;
        this.professor_name = professor_name;
        this.class_division = class_division;
        this.class_time = class_time;
        this.class_grade = class_grade;
        this.class_credit = class_credit;
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

    public Integer getClass_no() {
        return class_no;
    }

    public void setClass_no(Integer class_no) {
        this.class_no = class_no;
    }

    public String getClass_name() {
        return class_name;
    }

    public void setClass_name(String class_name) {
        this.class_name = class_name;
    }

    public Integer getCourse_id() {
        return course_id;
    }

    public void setCourse_id(Integer course_id) {
        this.course_id = course_id;
    }

    public String getProfessor_name() {
        return professor_name;
    }

    public void setProfessor_name(String professor_name) {
        this.professor_name = professor_name;
    }

    public Integer getClass_division() {
        return class_division;
    }

    public void setClass_division(Integer class_division) {
        this.class_division = class_division;
    }

    public Integer getClass_time() {
        return class_time;
    }

    public void setClass_time(Integer class_time) {
        this.class_time = class_time;
    }

    public String getClass_grade() {
        return class_grade;
    }

    public void setClass_grade(String class_grade) {
        this.class_grade = class_grade;
    }

    public Integer getClass_credit() {
        return class_credit;
    }

    public void setClass_credit(Integer class_credit) {
        this.class_credit = class_credit;
    }

    public Integer getExam_per() {
        return exam_per;
    }

    public void setExam_per(Integer exam_per) {
        this.exam_per = exam_per;
    }

    public Integer getQuiz_per() {
        return quiz_per;
    }

    public void setQuiz_per(Integer quiz_per) {
        this.quiz_per = quiz_per;
    }

    public Integer getPresentation_per() {
        return presentation_per;
    }

    public void setPresentation_per(Integer presentation_per) {
        this.presentation_per = presentation_per;
    }

    public Integer getProject_per() {
        return project_per;
    }

    public void setProject_per(Integer project_per) {
        this.project_per = project_per;
    }

    public Integer getAssignment_per() {
        return assignment_per;
    }

    public void setAssignment_per(Integer assignment_per) {
        this.assignment_per = assignment_per;
    }

    public Integer getAttendance_per() {
        return attendance_per;
    }

    public void setAttendance_per(Integer attendance_per) {
        this.attendance_per = attendance_per;
    }

    public Integer getExtra_per() {
        return extra_per;
    }

    public void setExtra_per(Integer extra_per) {
        this.extra_per = extra_per;
    }

    public Integer getMid_plan() {
        return mid_plan;
    }

    public void setMid_plan(Integer mid_plan) {
        this.mid_plan = mid_plan;
    }

    public Integer getFinal_plan() {
        return final_plan;
    }

    public void setFinal_plan(Integer final_plan) {
        this.final_plan = final_plan;
    }

    public String getExtra_plan() {
        return extra_plan;
    }

    public void setExtra_plan(String extra_plan) {
        this.extra_plan = extra_plan;
    }

    public String getClass_location() {
        return class_location;
    }

    public void setClass_location(String class_location) {
        this.class_location = class_location;
    }

    public Integer getField_no() {
        return field_no;
    }

    public void setField_no(Integer field_no) {
        this.field_no = field_no;
    }

    @Override
    public String toString() {
        return "Class2{" +
                "class_no=" + class_no +
                ", class_name='" + class_name + '\'' +
                ", course_id=" + course_id +
                ", professor_name='" + professor_name + '\'' +
                ", class_division=" + class_division +
                ", class_time=" + class_time +
                ", class_grade='" + class_grade + '\'' +
                ", class_credit=" + class_credit +
                ", exam_per=" + exam_per +
                ", quiz_per=" + quiz_per +
                ", presentation_per=" + presentation_per +
                ", project_per=" + project_per +
                ", assignment_per=" + assignment_per +
                ", attendance_per=" + attendance_per +
                ", extra_per=" + extra_per +
                ", mid_plan=" + mid_plan +
                ", final_plan=" + final_plan +
                ", extra_plan='" + extra_plan + '\'' +
                ", class_location='" + class_location + '\'' +
                ", field_no=" + field_no +
                '}';
    }
}