package com.board.back.model;


import javax.persistence.*;

//유저테이블
@Entity
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="student_no")
    private Integer student_no;

    @Column(name = "student_id")
    private Integer student_id;

    @Column(name = "student_pw")
    private String student_pw;

    @Column(name = "student_major")
    private Integer student_major;

    @Column(name = "student_grade")
    private Integer student_grade;

    public Student(Integer student_no, Integer student_id, String student_pw, Integer student_major,
                  Integer student_grade) {
        super();
        this.student_no = student_no;
        this.student_id = student_id;
        this.student_pw = student_pw;
        this.student_major = student_major;
        this.student_grade = student_grade;
    }
    @Override
    public String toString() {
        return "Student [student_no=" + student_no + ", student_id=" + student_id + ", student_pw=" + student_pw + ", student_major=" + student_major
                + ", student_grade=" + student_grade + "]";
    }
}
