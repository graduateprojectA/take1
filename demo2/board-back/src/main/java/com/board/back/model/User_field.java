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
@Table(name = "User_field")
@DynamicInsert
@DynamicUpdate
public class User_field {
    //    user_field_no int auto_increment primary key,
//    user_no int no null,
//    field_no int not null,
//    field_done boolean,
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_field_no")
    private Integer user_field_no;

    @Column(name = "user_no")
    private Integer user_no;

    @Column(name = "field_no")
    private Integer field_no;

    @Column(name = "field_done")
    private Boolean field_done;

    public Integer getUser_field_no() {
        return user_field_no;
    }
    public Integer getUser_no() { return user_no; }
    public Integer getField_no() { return field_no; }
    public Boolean getField_done() {
        return field_done;
    }
    public void setUser_field_no(Integer no){this.user_field_no = no;}
    public void setUser_no(Integer no){this.user_no = no;}
    public void setField_no(Integer no){this.field_no = no;}
    public void setField_done(Boolean a){this.field_done = a;}

    public User_field() {
        super();
    }
    public User_field(Integer user_field_no, Integer user_no, Integer field_no, Boolean field_done) {
        super();
        this.user_field_no = user_field_no;
        this.user_no = user_no;
        this.field_no = field_no;
        this.field_done = field_done;
    }

    @Override
    public String toString() {
        return "User_field [user_field_no=" + user_field_no + ", user_no=" + user_no
                + ", field_no=" + field_no + ", field_done=" + field_done + "]";
    }

}