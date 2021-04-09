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
@Table(name = "User_course")
@DynamicInsert
@DynamicUpdate
public class User_course {
//    user_course_no int auto_increment primary key,
//    user_no int not null,
//    course_no int not null,
//    course_done boolean,
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
//인덱스
@Column(name = "user_course_no")
private Integer user_course_no;

    @Column(name = "user_no")
    private Integer user_no;

    // 영역 이름
    @Column(name="field_no")
    private Integer field_no;

    @Column(name = "course_no")
    private Integer course_no;

    @Column(name= "course_id")
    private Integer course_id;

    @Column(name="course_name")
    private String course_name;

    @Column(name = "course_done")
    private Boolean course_done;

    public Integer getUser_course_no() {
        return user_course_no;
    }
    public Integer getUser_no() { return user_no; }
    public Integer getField_no() { return field_no;}
    public Integer getCourse_no() { return course_no; }
    public Integer getCourse_id() {
        return course_id;
    }
    public String getCourse_name() {return course_name;}
    public Boolean getCourse_done() {
        return course_done;
    }
    public void setUser_course_no(Integer no){this.user_course_no = no;}
    public void setUser_no(Integer no){this.user_no = no;}
    public void setField_no(Integer no){this.field_no = no;}
    public void setCourse_no(Integer no){this.course_no = no;}
    public void setCourse_id(Integer no){this.course_id = no;}
    public void setCourse_name(String a){this.course_name=a;}
    public void setCourse_done(Boolean a){this.course_done = a;}

    public User_course() {
        super();
    }
    public User_course(Integer user_course_no, Integer user_no, Integer field_no, Integer course_no,
                       Integer course_id,String course_name,Boolean course_done) {
        super();
        this.user_course_no = user_course_no;
        this.user_no = user_no;
        this.field_no = field_no;
        this.course_no = course_no;
        this.course_id = course_id;
        this.course_name = course_name;
        this.course_done = course_done;
    }
    public User_course(Integer user_no, Integer field_no, Integer course_no,
                       Integer course_id,String course_name,Boolean course_done) {
        super();
        this.user_no = user_no;
        this.field_no = field_no;
        this.course_no = course_no;
        this.course_id = course_id;
        this.course_name = course_name;
        this.course_done = course_done;
    }

    @Override
    public String toString() {
        return "User_course [user_course_no=" + user_course_no + ", user_no=" + user_no + ", field_no="+field_no
                +", course_no=" + course_no +", course_id="+course_id+", course_name"+course_name
                +", course_done=" + course_done + "]";
    }
}