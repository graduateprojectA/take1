package com.board.back.model;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.*;

@Entity
@Table(name = "Majors")
@DynamicInsert
@DynamicUpdate
public class Majors {
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
