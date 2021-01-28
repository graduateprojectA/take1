package com.board.back.model;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name = "majors")
@DynamicInsert
@DynamicUpdate
public class Majors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "major_name")
    private String major_name;
    @Column(name = "category")
    private String category;
    @Column(name = "professor_name")
    private String professor_name;
    @Column(name = "major_number")
    private Integer major_number;
    @Column(name = "recommend_time")
    private Integer recommend_time;
    @Column(name = "this_time")
    private Integer this_time;
    @Column(name = "division_number")
    private Integer division_number;

    public Majors() {
        super();
    }
    public Majors(String major_name, String category, String professor_name, Integer major_number,  Integer this_time,
                  Integer recommend_time, Integer division_number) {
        super();
        this.major_name = major_name;
        this.category = category;
        this.professor_name = professor_name;
        this.major_number = major_number;
        this.this_time = this_time;
        this.recommend_time = recommend_time;
        this.division_number = division_number;
    }

    public Integer getId() {
        return id;
    }
    public String getMajor_name() {
        return major_name;
    }
    public String getCategory() {
        return category;
    }
    public String getProfessor_name() {
        return professor_name;
    }
    public Integer getMajor_number() {
        return major_number;
    }
    public Integer getThis_time() {
        return this_time;
    }
    public Integer getRecommend_time() {
        return recommend_time;
    }
    public Integer getDivision_number() {
        return division_number;
    }

    @Override
    public String toString() {
        return "Board [id=" + id + ", major_name=" + major_name + ", category=" + category + ", professor_name=" + professor_name + ", major_number="
                + major_number + ", this_time=" + this_time + ", recommend_time=" + recommend_time + ", division_number=" + division_number
                +"]";
    }


}
