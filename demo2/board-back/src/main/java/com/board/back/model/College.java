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
@Table(name = "College")
@DynamicInsert
@DynamicUpdate
public class College {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "college_no")
    private Integer college_no;

    @Column(name = "college_name")
    private String college_name;

    public Integer getCollege_no() {
        return college_no;
    }
    public String getCollege_name() {
        return college_name;
    }

    public College() {
        super();
    }
    public College(Integer college_no, String college_name) {
        super();
        this.college_name = college_name;
        this.college_no = college_no;
    }

    @Override
    public String toString() {
        return "College [no=" + college_no + ", college_name=" + college_name + "]";
    }
}
