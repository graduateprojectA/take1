package com.example.demo.domain;

import javax.persistence.*;

@Entity
public class Majors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String major_name;
    private int major_number;
    private String category;
    private int recommend_time;
    private int this_time;
    private String professor_name;
    private int division_number;
}
