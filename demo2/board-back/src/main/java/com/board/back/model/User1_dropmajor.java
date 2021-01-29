package com.board.back.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User1_dropmajor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String major_name;
    private int major_number;
    private int division_number;
    private int flag;

    public int getId() {
        return id;
    }
    public String getMajor_name() {
        return major_name;
    }
    public int getMajor_number() {
        return major_number;
    }
    public int getDivision_number() {
        return division_number;
    }
    public int getFlag() { return flag; }
}
