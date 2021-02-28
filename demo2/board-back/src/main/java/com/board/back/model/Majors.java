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

    public Integer getNo() {
        return major_no;
    }
    public String getMajor_name() {
        return major_name;
    }

    public Majors() {
        super();
    }
    public Majors(Integer major_no, String major_name) {
        super();
        this.major_no = major_no;
        this.major_name = major_name;
    }

    @Override
    public String toString() {
        return "Majors [no=" + major_no + ", major_name=" + major_name + "]";
    }
}
