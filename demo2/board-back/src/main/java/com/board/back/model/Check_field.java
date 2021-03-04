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
@Table(name = "Check_field")
@DynamicInsert
@DynamicUpdate

public class Check_field {
//    create table Check_field(
//      check_field_no int auto_increment primary key,
//      major_no int not null,
//      student_id int not null,	#학번 18, 19, 20, 21
//      check_field_name varchar(30),
//      check_field_number int,
//     check_field_credit int,
//    foreign key(major_no) references Majors(major_no) on update cascade on delete cascade
//);

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //인덱스
    @Column(name ="check_field_no")
    private Integer check_field_no;

    @Column(name="major_no")
    private Integer major_no;

    // 학생 학번
    @Column(name = "student_id")
    private Integer student_id;

    // 영역 이름
    @Column(name = "check_field_name")
    private String check_field_name;

    // 영역별 과목 수
    @Column(name = "check_field_number")
    private Integer check_field_number;

    // 영역별 학점
    @Column(name = "check_field_credit")
    private Integer check_field_credit;

    public Integer getCheck_field_no() {
        return check_field_no;
    }
    public Integer getMajor_no() { return major_no; }
    public Integer getStudent_id() {
        return student_id;
    }
    public String getCheck_field_name() { return check_field_name; }
    public Integer getCheck_field_number() {
        return check_field_number;
    }
    public Integer getCheck_field_credit() {
        return check_field_credit;
    }

    public Check_field() {
        super();
    }
    public Check_field(Integer field_no, Integer major_no, Integer student_id, String check_field_name, Integer check_field_number,
                 Integer check_field_credit) {
        super();
        this.check_field_no = field_no;
        this.major_no = major_no;
        this.student_id = student_id;
        this.check_field_name = check_field_name;
        this.check_field_number = check_field_number;
        this.check_field_credit = check_field_credit;
    }

    @Override
    public String toString() {
        return "Field [check_field_no=" + check_field_no + ", major_no=" +major_no+ "student_id=" + student_id
                + ", check_field_name=" + check_field_name + ", check_field_number=" + check_field_number
                + ", check_field_credit=" + check_field_credit + "]";
    }
}