package com.board.back.model;
public class User_timetable2 {
    private Integer user_timetable_no;
    //@Column(name = "user_no")
    private Integer user_no;
    //@Column(name = "class_1")
    private String class_1;
    //@Column(name = "class_2")
    private String class_2;
    //@Column(name = "class_3")
    private String class_3;
    //@Column(name = "class_4")
    private String class_4;
    //@Column(name = "class_5")
    private String class_5;
    //@Column(name = "class_6")
    private String class_6;
    //@Column(name = "class_7")
    private String class_7;
    //@Column(name = "class_8")
    private String class_8;
    //@Column(name = "class_9")
    private String class_9;
    //@Column(name = "credit")
    private Integer credit;

    public void setUser_timetable_no(Integer no) {this.user_timetable_no = no;}
    public Integer getUser_timetable_no() {return this.user_timetable_no;}
    public void setUser_no(Integer no){this.user_no = no;}
    public Integer getUser_no() {return this.user_no;}
    public void setClass_1(String a){this.class_1= a;}
    public String getClass_1() {return this.class_1;}
    public void setClass_2(String a){this.class_2= a;}
    public String getClass_2() {return this.class_2;}
    public void setClass_3(String a){this.class_3= a;}
    public String getClass_3() {return this.class_3;}
    public void setClass_4(String a){this.class_4= a;}
    public String getClass_4() {return this.class_4;}
    public void setClass_5(String a){this.class_5= a;}
    public String getClass_5() {return this.class_5;}
    public void setClass_6(String a){this.class_6= a;}
    public String getClass_6() {return this.class_6;}
    public void setClass_7(String a){this.class_7= a;}
    public String getClass_7() {return this.class_7;}
    public void setClass_8(String a){this.class_8= a;}
    public String getClass_8() {return this.class_8;}
    public void setClass_9(String a){this.class_9= a;}
    public String getClass_9() {return this.class_9;}
    public void setCredit(Integer no){this.credit = no;}
    public Integer getCredit(){return this.credit;}
    public User_timetable2() {
        super();
    }
    public User_timetable2(Integer user_timetable_no, Integer user_no, String class_1, String class_2,
                           String class_3, String class_4, String class_5, String class_6,
                           String class_7, String class_8, String class_9, Integer credit) {
        super();
        this.user_timetable_no = user_timetable_no;
        this.user_no = user_no;
        this.class_1 = class_1;
        this.class_2 = class_2;
        this.class_3 = class_3;
        this.class_4 = class_4;
        this.class_5 = class_5;
        this.class_6 = class_6;
        this.class_7 = class_7;
        this.class_8 = class_8;
        this.class_9 = class_9;
        this.credit = credit;
    }

    @Override
    public String toString() {
        return "User_timetable [user_timetable_no=" + user_timetable_no + ", user_no=" + user_no
                + ", class_1=" + class_1 + ", class_2=" + class_2 + ", class_3=" + class_3 + ", class_4=" + class_4
                + ", class_5=" + class_5 + ", class_6=" + class_6 + ", class_7=" + class_7 + ", class_8=" + class_8
                + ", class_9=" + class_9 + ", credit=" + credit + "]";
    }

}
