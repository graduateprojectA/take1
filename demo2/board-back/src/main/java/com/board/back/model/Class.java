
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
@Table(name = "Class")
@DynamicInsert
@DynamicUpdate
public class Class {
    //인덱스
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="class_no")
    private Integer class_no;

    @Column(name = "class_name")
    private String class_name;

    @Column(name ="course_id")
    private Integer course_id;

    @Column(name="professor_name")
    private String professor_name;

    @Column(name = "class_division")
    private Integer class_division;

    @Column(name = "class_time")
    private Integer class_time;


    public Integer getClass_no() {
        return class_no;
    }

    public void setClass_no(Integer no) {
        this.class_no = no;
    }

    public Integer getCourse_id() {
        return course_id;
    }

    public void setCourse_id(Integer id) {
        this.course_id = id;
    }

    public String getClass_name() {
        return class_name;
    }

    public void setClass_name(String name) {
        this.class_name = name;
    }

    public String getProfessor_name() {return professor_name;}

    public void setProfessor_name(String name){ this.professor_name = name;}

    public Integer getClass_division() {
        return class_division;
    }

    public void setClass_division(Integer num) {
        this.class_division = num;
    }

    public Integer getClass_time() {
        return class_time;
    }

    public void setClass_time(Integer time) {
        this.class_time = time;
    }
    public Class() {
        super();
    }
    public Class(Integer class_no, Integer course_id, String class_name, String professor_name, Integer class_division, Integer class_time) {
        super();
        this.class_no = class_no;
        this.course_id = course_id;
        this.class_name = class_name;
        this.professor_name = professor_name;
        this.class_division = class_division;
        this.class_time = class_time;
    }
    @Override
    public String toString() {
        return "Class [class_no=" + class_no + ", course_id=" + course_id + ", class_name=" + class_name
                + ", professor_name=" +professor_name + ", class_division=" + class_division
                + ", class_time=" + class_time + "]";
    }
}