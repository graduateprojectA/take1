package com.board.back.model;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.*;

//가중치값 선호 테이블
@Entity
@Table(name = "User_preference")
@DynamicInsert
@DynamicUpdate
public class User_preference {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_preference_no")
    private Integer user_preference_no;

    @Column(name = "user_no")
    private Integer user_no;

    @Column(name = "exam_pre")
    private Integer exam_pre;

    @Column(name = "quiz_pre")
    private Integer quiz_pre;

    @Column(name = "presentation_pre")
    private Integer presentation_pre;

    @Column(name = "project_pre")
    private Integer project_pre;

    @Column(name="assignment_pre")
    private Integer assignment_pre;

    @Column(name = "attendance_pre")
    private Integer attendance_pre;

    public Integer getUser_preference_no() {return user_preference_no;}
    public Integer getUser_no() { return user_no; }
    public Integer getExam_pre() {return exam_pre;}
    public Integer getQuiz_pre() {return quiz_pre;}
    public Integer getPresentation_pre() {return presentation_pre;}
    public Integer getProject_pre() {return project_pre;}
    public Integer getAssignment_pre() {return assignment_pre;}
    public Integer getAttendance_pre() {return attendance_pre;}

    public void setUser_preference_no(Integer no) {this.user_preference_no = no;}
    public void setUser_no(Integer no){this.user_no = no;}
    public void setExam_pre(Integer no){this.exam_pre = no;}
    public void setQuiz_pre(Integer no) {this.quiz_pre = no;}
    public void setPresentation_pre(Integer no) {this.presentation_pre = no;}
    public void setProject_pre(Integer no) {this.project_pre = no;}
    public void setAssignment_pre(Integer no) {this.assignment_pre = no;}
    public void setAttendance_pre(Integer no) {this.attendance_pre = no;}

    public User_preference() {
        super();
    }
    public User_preference(Integer user_preference_no, Integer user_no, Integer exam_pre, Integer quiz_pre, Integer presentation_pre, Integer project_pre,
                           Integer assignment_pre, Integer attendance_pre) {
        super();
        this.user_preference_no = user_preference_no;
        this.user_no = user_no;
        this.exam_pre = exam_pre;
        this.quiz_pre = quiz_pre;
        this.presentation_pre = presentation_pre;
        this.project_pre = project_pre;
        this.assignment_pre = assignment_pre;
        this.attendance_pre = attendance_pre;
    }

    @Override
    public String toString() {
        return "User_preference [user_preference_no=" + user_preference_no+ ", user_no=" + user_no + ", exam_pre=" + exam_pre + ", quiz_pre="+ quiz_pre + ", presentation_pre="+
                presentation_pre + ", project_pre=" +project_pre + ", assignment_pre=" +assignment_pre + ", attendance_pre="+
                attendance_pre + "]";
    }

}