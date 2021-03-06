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
@Table(name = "Field")
@DynamicInsert
@DynamicUpdate

//create table Field(
//        field_no int auto_increment primary key,
//        check_field_no int,
//        major_no int not null,
//        student_id int not null,	#학번 18, 19, 20, 21
//        field_name varchar(30),
//        field_number int, #영역 개수
//        field_credit int,
//        foreign key(check_field_no) references Check_field(check_field_no) on update cascade on delete cascade
//        );
public class Field {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //인덱스
    @Column(name ="field_no")
    private Integer field_no;

    @Column(name ="check_field_no")
    private Integer check_field_no;

    @Column(name="major_no")
    private Integer major_no;

    // 학생 학번
    @Column(name = "student_id")
    private Integer student_id;

    // 영역 이름
    @Column(name = "field_name")
    private String field_name;

    // 영역별 과목 수
    @Column(name = "field_number")
    private Integer field_number;

    // 영역별 학점
    @Column(name = "field_credit")
    private Integer field_credit;

    public Integer getField_no() {
        return field_no;
    }
    public Integer getCheck_field_no() {
        return check_field_no;
    }
    public Integer getMajor_no() { return major_no; }
    public Integer getStudent_id() {
        return student_id;
    }
    public String getField_name() { return field_name; }
    public Integer getField_number() {
        return field_number;
    }
    public Integer getField_credit() {
        return field_credit;
    }


    public Field() {
        super();
    }
    public Field(Integer field_no, Integer check_field_no, Integer major_no,Integer student_id, String field_name, Integer field_number,
                 Integer field_credit) {
        super();
        this.field_no = field_no;
        this.check_field_no = check_field_no;
        this.major_no = major_no;
        this.student_id = student_id;
        this.field_name = field_name;
        this.field_number = field_number;
        this.field_credit = field_credit;
    }

    @Override
    public String toString() {
        return "Field [field_no=" + field_no + ", student_id=" + student_id + ", field_name=" + field_name
                + ", field_number=" + field_number + ", check_field_no=" + check_field_no + "]";
    }
}