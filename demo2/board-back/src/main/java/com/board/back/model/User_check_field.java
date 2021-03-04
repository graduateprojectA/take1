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
@Table(name = "User_check_field")
@DynamicInsert
@DynamicUpdate
public class User_check_field {
    //        user_check_field_no int auto_increment primary key,
//        user_no int not null,
//        check_field_no int not null,
//        check_field_done boolean,
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        //인덱스
        @Column(name = "user_check_field_no")
        private Integer user_check_field_no;

        @Column(name = "user_no")
        private Integer user_no;

        // 영역 이름
        @Column(name = "check_field_no")
        private Integer check_field_no;

        @Column(name = "check_field_done")
        private Boolean check_field_done;

        public Integer getUser_check_field_no() {
            return check_field_no;
        }
        public Integer getUser_no() { return user_no; }
        public Integer getCheck_field_no() { return check_field_no; }
        public Boolean getCheck_field_done() {
            return check_field_done;
        }
        public void setUser_check_field_no(Integer no){this.user_check_field_no = no;}
        public void setUser_no(Integer no){this.user_no = no;}
        public void setCheck_field_no(Integer no){this.check_field_no = no;}
        public void setCheck_field_done(Boolean a){this.check_field_done = a;}


        public User_check_field() {
            super();
        }
        public User_check_field(Integer user_check_field_no, Integer user_no, Integer check_field_no, Boolean check_field_done) {
            super();
            this.user_check_field_no = user_check_field_no;
            this.user_no = user_no;
            this.check_field_no = check_field_no;
            this.check_field_done = check_field_done;
        }
        public User_check_field(Integer user_no, Integer check_field_no, Boolean check_field_done) {
            super();
            this.user_no = user_no;
            this.check_field_no = check_field_no;
            this.check_field_done = check_field_done;
    }

        @Override
        public String toString() {
            return "User_check_field [user_check_field_no=" + user_check_field_no + ", user_no=" + user_no
                    + ", check_field_no=" + check_field_no + ", check_field_done=" + check_field_done + "]";
        }
    }