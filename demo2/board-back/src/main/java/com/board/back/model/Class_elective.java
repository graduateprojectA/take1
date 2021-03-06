package com.board.back.model;
import com.board.back.repository.MajorRepository;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.*;
import com.board.back.service.TimetableService;
import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name = "Class_elective")
@DynamicInsert
@DynamicUpdate
public class Class_elective implements Comparable<Class_elective>{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="class_elective_no")
    private Integer class_elective_no;
    @Column(name="class_no")
    private Integer class_no;
    @Column(name="class_name")
    private String class_name;
    @Column(name="course_id")
    private Integer course_id;
    @Column(name="professor_name")
    private String professor_name;
    @Column(name="class_division")
    private Integer class_division;
    @Column(name="class_time")
    private Integer class_time;
    @Column(name="class_credit")
    private Integer class_credit;
    @Column(name="exam_per")
    private Integer exam_per;
    @Column(name="quiz_per")
    private Integer quiz_per;
    @Column(name="presentation_per")
    private Integer presentation_per;
    @Column(name="project_per")
    private Integer project_per;
    @Column(name="assignment_per")
    private Integer assignment_per;
    @Column(name="attendance_per")
    private Integer attendance_per;
    @Column(name="extra_per")
    private Integer extra_per;
    @Column(name="mid_plan")
    private Integer mid_plan;
    @Column(name="final_plan")
    private Integer final_plan;
    @Column(name=" extra_plan")
    private String extra_plan;
    @Column(name="class_location")
    private String class_location;


    public Integer getClass_elective_no() {
        return class_elective_no;
    }

    public void setClass_elective_no(Integer class_elective_no) {
        this.class_elective_no = class_elective_no;
    }

    public Integer getClass_no() {
        return class_no;
    }

    public void setClass_no(Integer class_no) {
        this.class_no = class_no;
    }

    public String getClass_name() {
        return class_name;
    }

    public void setClass_name(String class_name) {
        this.class_name = class_name;
    }

    public Integer getCourse_id() {
        return course_id;
    }

    public void setCourse_id(Integer course_id) {
        this.course_id = course_id;
    }

    public String getProfessor_name() {
        return professor_name;
    }

    public void setProfessor_name(String professor_name) {
        this.professor_name = professor_name;
    }

    public Integer getClass_division() {
        return class_division;
    }

    public void setClass_division(Integer class_division) {
        this.class_division = class_division;
    }

    public Integer getClass_time() {
        return class_time;
    }

    public void setClass_time(Integer class_time) {
        this.class_time = class_time;
    }

    public Integer getClass_credit() {
        return class_credit;
    }

    public void setClass_credit(Integer class_credit) {
        this.class_credit = class_credit;
    }

    public Integer getExam_per() {
        return exam_per;
    }

    public void setExam_per(Integer exam_per) {
        this.exam_per = exam_per;
    }

    public Integer getQuiz_per() {
        return quiz_per;
    }

    public void setQuiz_per(Integer quiz_per) {
        this.quiz_per = quiz_per;
    }

    public Integer getPresentation_per() {
        return presentation_per;
    }

    public void setPresentation_per(Integer presentation_per) {
        this.presentation_per = presentation_per;
    }

    public Integer getProject_per() {
        return project_per;
    }

    public void setProject_per(Integer project_per) {
        this.project_per = project_per;
    }

    public Integer getAssignment_per() {
        return assignment_per;
    }

    public void setAssignment_per(Integer assignment_per) {
        this.assignment_per = assignment_per;
    }

    public Integer getAttendance_per() {
        return attendance_per;
    }

    public void setAttendance_per(Integer attendance_per) {
        this.attendance_per = attendance_per;
    }

    public Integer getExtra_per() {
        return extra_per;
    }

    public void setExtra_per(Integer extra_per) {
        this.extra_per = extra_per;
    }

    public Integer getMid_plan() {
        return mid_plan;
    }

    public void setMid_plan(Integer mid_plan) {
        this.mid_plan = mid_plan;
    }

    public Integer getFinal_plan() {
        return final_plan;
    }

    public void setFinal_plan(Integer final_plan) {
        this.final_plan = final_plan;
    }

    public String getExtra_plan() {
        return extra_plan;
    }

    public void setExtra_plan(String extra_plan) {
        this.extra_plan = extra_plan;
    }

    public String getClass_location() {
        return class_location;
    }

    public void setClass_location(String class_location) {
        this.class_location = class_location;
    }

    public Class_elective(){super();}
    public Class_elective(Integer class_elective_no, Integer class_no, String class_name, Integer course_id, String professor_name, Integer class_division, Integer class_time, Integer class_credit, Integer exam_per, Integer quiz_per, Integer presentation_per, Integer project_per, Integer assignment_per, Integer attendance_per, Integer extra_per, Integer mid_plan, Integer final_plan, String extra_plan, String class_location) {
        this.class_elective_no = class_elective_no;
        this.class_no = class_no;
        this.class_name = class_name;
        this.course_id = course_id;
        this.professor_name = professor_name;
        this.class_division = class_division;
        this.class_time = class_time;
        this.class_credit = class_credit;
        this.exam_per = exam_per;
        this.quiz_per = quiz_per;
        this.presentation_per = presentation_per;
        this.project_per = project_per;
        this.assignment_per = assignment_per;
        this.attendance_per = attendance_per;
        this.extra_per = extra_per;
        this.mid_plan = mid_plan;
        this.final_plan = final_plan;
        this.extra_plan = extra_plan;
        this.class_location = class_location;
    }


    @Override
    public String toString() {
        return "Class_elective{" +
                "class_elective_no=" + class_elective_no +
                ", class_no=" + class_no +
                ", class_name='" + class_name + '\'' +
                ", course_id=" + course_id +
                ", professor_name='" + professor_name + '\'' +
                ", class_division=" + class_division +
                ", class_time=" + class_time +
                ", class_credit=" + class_credit +
                ", exam_per=" + exam_per +
                ", quiz_per=" + quiz_per +
                ", presentation_per=" + presentation_per +
                ", project_per=" + project_per +
                ", assignment_per=" + assignment_per +
                ", attendance_per=" + attendance_per +
                ", extra_per=" + extra_per +
                ", mid_plan=" + mid_plan +
                ", final_plan=" + final_plan +
                ", extra_plan='" + extra_plan + '\'' +
                ", class_location='" + class_location + '\'' +
                '}';
    }

    @Override
    public int compareTo(Class_elective o) {
        // TODO Auto-generated method stub
        String []n =TimetableService.user_pre;
        int []x=new int[2];
        x=findquery(n,o,0);
        if(x[0] < x[1]) {
            return -1;
        }else if (x[0] == x[1]) {
            x=findquery(n,o,1);
            if(x[0] < x[1]) {
                return -1;
            }else if (x[0] == x[1]) {
                x=findquery(n,o,2);
                if(x[0] < x[1]) {
                    return -1;
                }else if (x[0] == x[1]) {
                    x=findquery(n,o,3);
                    if(x[0] < x[1]) {
                        return -1;
                    }else if (x[0] == x[1]) {
                        x=findquery(n,o,4);
                        if(x[0] < x[1]) {
                            return -1;
                        }else if (x[0] == x[1]) {
                            x=findquery(n,o,5);
                            if(x[0] < x[1]) {
                                return -1;
                            }else if (x[0] == x[1]) {
                                return 0;
                            } else {
                                return 1;
                            }
                        } else {
                            return 1;
                        }
                    } else {
                        return 1;
                    }
                } else {
                    return 1;
                }
            } else {
                return 1;
            }
        } else {
            return 1;
        }
    }
    public int[] findquery(String []n, Class_elective o, int index){
        int x[]=new int[2];
        if(n[index].equals("exam_per")){
            x[0] = this.exam_per;
            x[1] = o.exam_per;
        }else if(n[index].equals("quiz_per")){
            x[0] = this.quiz_per;
            x[1] = o.quiz_per;
        }else if(n[index].equals("presentation_per")){
            x[0] = this.presentation_per;
            x[1] = o.presentation_per;
        }
        else if(n[index].equals("project_per")){
            x[0] = this.project_per;
            x[1] = o.project_per;
        }
        else if(n[index].equals("assignment_per")){
            x[0] = this.assignment_per;
            x[1] = o.assignment_per;
        }
        else if(n[index].equals("attendance_per")){
            x[0] = this.attendance_per;
            x[1] = o.attendance_per;
        }
        return x;
    }

}