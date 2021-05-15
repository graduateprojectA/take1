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
    private int user_preference_no;

    @Column(name = "user_no")
    private int user_no;

    @Column(name = "exam_pre")
    private int exam_pre;

    @Column(name = "quiz_pre")
    private int quiz_pre;

    @Column(name = "presentation_pre")
    private int presentation_pre;

    @Column(name = "project_pre")
    private int project_pre;

    @Column(name="assignment_pre")
    private int assignment_pre;

    @Column(name = "attendance_pre")
    private int attendance_pre;

    public int getUser_preference_no() {return user_preference_no;}
    public int getUser_no() { return user_no; }
    public int getExam_pre() {return exam_pre;}
    public int getQuiz_pre() {return quiz_pre;}
    public int getPresentation_pre() {return presentation_pre;}
    public int getProject_pre() {return project_pre;}
    public int getAssignment_pre() {return assignment_pre;}
    public int getAttendance_pre() {return attendance_pre;}

    public void setUser_preference_no(int no) {this.user_preference_no = no;}
    public void setUser_no(int no){this.user_no = no;}
    public void setExam_pre(int no){this.exam_pre = no;}
    public void setQuiz_pre(int no) {this.quiz_pre = no;}
    public void setPresentation_pre(int no) {this.presentation_pre = no;}
    public void setProject_pre(int no) {this.project_pre = no;}
    public void setAssignment_pre(int no) {this.assignment_pre = no;}
    public void setAttendance_pre(int no) {this.attendance_pre = no;}

    public User_preference() {
        super();
    }
    public User_preference(int user_preference_no, int user_no, int exam_pre, int quiz_pre, int presentation_pre, Integer project_pre,
                           int assignment_pre,int attendance_pre) {
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