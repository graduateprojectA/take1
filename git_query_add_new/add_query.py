# -*- coding: utf-8 -*-
import scipy.io
import csv
import pymysql
import math

# College
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('college.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    college_name = row[0]
    college_name = "\"" + college_name + "\""
    sql = "insert into graduate.college (college_name) values (%s)" %(college_name)
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Majors
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('majors.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_name = row[0]
    major_name = "\"" + major_name + "\""
    college_no = int(row[1])
    sql = "insert into graduate.majors (major_name, college_no) values (%s, %d)" %(major_name, college_no)
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Check_field
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('check_field.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:  
    major_no = int(row[0])
    student_id = int(row[1])
    check_field_name = row[2]
    check_field_name = "\"" + check_field_name + "\""
    course_id = int(row[1])
    check_field_number = int(row[3])
    check_field_credit = int(row[4])
    sql = "insert into graduate.check_field (major_no, student_id, check_field_name, check_field_number, check_field_credit) values(%d, %d, %s, %d, %d);" %(major_no, student_id, check_field_name, check_field_number, check_field_credit)
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Field
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('field.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader: 
    check_field_no = int(row[0])
    major_no = int(row[1])
    student_id = int(row[2])
    field_name = row[3]
    field_name = "\"" + field_name + "\""
    field_number = int(row[4])
    field_credit = int(row[5])
    sql = "insert into graduate.field (check_field_no, major_no, student_id, field_name, field_number, field_credit) values (%d, %d, %d, %s, %d, %d);" %(check_field_no, major_no, student_id, field_name, field_number, field_credit)
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Field2
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('field2.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader: 
    check_field_no = int(row[0])
    major_no = int(row[1])
    student_id = int(row[2])
    field_name = row[3]
    field_name = "\"" + field_name + "\""
    field_number = int(row[4])
    field_credit = int(row[5])
    sql = "insert into graduate.field (check_field_no, major_no, student_id, field_name, field_number, field_credit) values (%d, %d, %d, %s, %d, %d);" %(check_field_no, major_no, student_id, field_name, field_number, field_credit)
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Course_administer
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('course_administer.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_no = int(row[0])
    student_id = int(row[1])
    field_no = int(row[2])
    course_id = int(row[3])
    course_name = row[4]
    course_name = "\"" + course_name + "\""
    course_semester = int(row[6])
    course_hours = row[7]
    course_credit = int(row[8])
    pre_course_id = row[9]
    course_grade = row[5]
    if pre_course_id == "null":
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit)
    else:
        pre_course_id = int(pre_course_id)
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit, pre_course_id)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id)            
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Course_design
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('course_design.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_no = int(row[0])
    student_id = int(row[1])
    field_no = int(row[2])
    course_id = int(row[3])
    course_name = row[4]
    course_name = "\"" + course_name + "\""
    course_semester = int(row[6])
    course_hours = row[7]
    course_credit = int(row[8])
    pre_course_id = row[9]
    course_grade = row[5]
    if pre_course_id == "null":
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit)
    else:
        pre_course_id = int(pre_course_id)
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit, pre_course_id)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id)            
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Course_education
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('course_education.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_no = int(row[0])
    student_id = int(row[1])
    field_no = int(row[2])
    course_id = int(row[3])
    course_name = row[4]
    course_name = "\"" + course_name + "\""
    course_semester = int(row[6])
    course_hours = row[7]
    course_credit = int(row[8])
    pre_course_id = row[9]
    course_grade = row[5]
    if pre_course_id == "null":
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit)
    else:
        pre_course_id = int(pre_course_id)
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit, pre_course_id)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id)            
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Course_engineering
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('course_engineering.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_no = int(row[0])
    student_id = int(row[1])
    field_no = int(row[2])
    course_id = int(row[3])
    course_name = row[4]
    course_name = "\"" + course_name + "\""
    course_semester = int(row[6])
    course_hours = row[7]
    course_credit = int(row[8])
    pre_course_id = row[9]
    course_grade = row[5]
    if pre_course_id == "null":
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit)
    else:
        pre_course_id = int(pre_course_id)
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit, pre_course_id)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id)            
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Course_humanities
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('course_humanities.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_no = int(row[0])
    student_id = int(row[1])
    field_no = int(row[2])
    course_id = int(row[3])
    course_name = row[4]
    course_name = "\"" + course_name + "\""
    course_semester = int(row[6])
    course_hours = row[7]
    course_credit = int(row[8])
    pre_course_id = row[9]
    course_grade = row[5]
    if pre_course_id == "null":
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit)
    else:
        pre_course_id = int(pre_course_id)
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit, pre_course_id)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id)            
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Course_music
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('course_music.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_no = int(row[0])
    student_id = int(row[1])
    field_no = int(row[2])
    course_id = int(row[3])
    course_name = row[4]
    course_name = "\"" + course_name + "\""
    course_semester = int(row[6])
    course_hours = row[7]
    course_credit = int(row[8])
    pre_course_id = row[9]
    course_grade = row[5]
    if pre_course_id == "null":
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit)
    else:
        pre_course_id = int(pre_course_id)
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit, pre_course_id)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id)            
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Course_naturalscience
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('course_naturalscience.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_no = int(row[0])
    student_id = int(row[1])
    field_no = int(row[2])
    course_id = int(row[3])
    course_name = row[4]
    course_name = "\"" + course_name + "\""
    course_semester = int(row[6])
    course_hours = row[7]
    course_credit = int(row[8])
    pre_course_id = row[9]
    course_grade = row[5]
    if pre_course_id == "null":
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit)
    else:
        pre_course_id = int(pre_course_id)
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit, pre_course_id)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id)            
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Course_shinyung
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('course_shinyung.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_no = int(row[0])
    student_id = int(row[1])
    field_no = int(row[2])
    course_id = int(row[3])
    course_name = row[4]
    course_name = "\"" + course_name + "\""
    course_semester = int(row[6])
    course_hours = row[7]
    course_credit = int(row[8])
    pre_course_id = row[9]
    course_grade = row[5]
    if pre_course_id == "null":
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit)
    else:
        pre_course_id = int(pre_course_id)
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit, pre_course_id)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id)            
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Course_socialscience
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('course_socialscience.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_no = int(row[0])
    student_id = int(row[1])
    field_no = int(row[2])
    course_id = int(row[3])
    course_name = row[4]
    course_name = "\"" + course_name + "\""
    course_semester = int(row[6])
    course_hours = row[7]
    course_credit = int(row[8])
    pre_course_id = row[9]
    course_grade = row[5]
    if pre_course_id == "null":
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, null);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit)
    else:
        pre_course_id = int(pre_course_id)
        if course_grade == "null":
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, null, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_semester, course_hours, course_credit, pre_course_id)
        else:
            course_grade = int(course_grade)
            if course_hours == "null":
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, null, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_credit, pre_course_id)
            else:
                course_hours = float(course_hours)
                sql = "insert into graduate.course(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id) values (%d, %d, %d, %d, %s, %d, %d, %.2f, %d, %d);" %(major_no, student_id,  field_no, course_id, course_name, course_grade, course_semester, course_hours, course_credit, pre_course_id)            
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()

# Class
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('class.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
next(f)
for row in csvReader:    
    class_name = row[0]
    class_name = "\"" + class_name + "\""
    course_id = int(row[1])
    professor_name = row[2]
    professor_name = ''.join(professor_name.split())
    professor_name = "\"" + professor_name + "\""
    class_division = int(row[3])
    class_time = row[5]
    class_credit = int(math.ceil(float(row[4])))
    exam_per = int(row[7])
    quiz_per = int(row[8])
    presentation_per = int(row[9])
    project_per = int(row[10])
    assignment_per = int(row[11])
    attendance_per = int(row[12])
    extra_per = int(row[13])
    mid_plan = row[14]
    final_plan = row[15]
    extra_plan = "\"" + row[16] + "\""
    class_location = "\"" + row[17] + "\""
    if class_time == "":
        if mid_plan == "":
            if final_plan == "":
                sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%s, %d, %s, %d, null, %d, %d, %d, %d, %d, %d, %d, %d, null, null, %s, %s)" %(class_name, int(course_id), professor_name, int(class_division), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), extra_plan, class_location)
            else:
                final_plan == int(row[15])
                sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%s, %d, %s, %d, null, %d, %d, %d, %d, %d, %d, %d, %d, null, %d, %s, %s)" %(class_name, int(course_id), professor_name, int(class_division), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(final_plan), extra_plan, class_location)   
        else:
            mid_plan = int(row[14])
            if final_plan == "":
                sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%s, %d, %s, %d, null, %d, %d, %d, %d, %d, %d, %d, %d, %d, null, %s, %s)" %(class_name, int(course_id), professor_name, int(class_division), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(mid_plan), extra_plan, class_location)   
            else:
                final_plan == int(row[15])
                sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%s, %d, %s, %d, null, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %s, %s)" %(class_name, int(course_id), professor_name, int(class_division), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(mid_plan), int(final_plan), extra_plan, class_location)
    else:
        try:
            class_time = int(float(row[5]))
        except:
            print(row[5])
        if mid_plan == "":
            if final_plan == "":
                sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%s, %d, %s, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, null, null, %s, %s)" %(class_name, int(course_id), professor_name, int(class_division), int(class_time), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), extra_plan, class_location)
            else:
                final_plan == int(row[15])
                sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%s, %d, %s, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, null, %d, %s, %s)" %(class_name, int(course_id), professor_name, int(class_division), int(class_time), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(final_plan), extra_plan, class_location)   
        else:
            mid_plan = int(row[14])
            if final_plan == "":
                sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%s, %d, %s, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, null, %s, %s)" %(class_name, int(course_id), professor_name, int(class_division), int(class_time), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(mid_plan), extra_plan, class_location)   
            else:
                final_plan == int(row[15])
                sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%s, %d, %s, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %s, %s)" %(class_name, int(course_id), professor_name, int(class_division), int(class_time), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(mid_plan), int(final_plan), extra_plan, class_location)
       # sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time, exam_per, quiz_per, presentation_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%s, %d, %s, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %s, %s)" %(class_name, course_id, professor_name, class_division, class_time, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location)
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()


# Class_elective
conn = pymysql.connect(host='database-2.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='admin', password='123456789', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('class_elective.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
next(f)
for row in csvReader:  
    class_no = int(row[0])
    class_name = row[1]
    class_name = "\"" + class_name + "\""
    course_id = int(row[2])
    professor_name = row[3]
    professor_name = ''.join(professor_name.split())
    professor_name = "\"" + professor_name + "\""
    class_division = int(row[4])
    class_time = row[6]
    class_credit = int(math.ceil(float(row[5])))
    exam_per = int(row[8])
    quiz_per = int(row[9])
    presentation_per = int(row[10])
    project_per = int(row[11])
    assignment_per = int(row[12])
    attendance_per = int(row[13])
    extra_per = int(row[14])
    mid_plan = row[15]
    final_plan = row[16]
    extra_plan = "\"" + row[17] + "\""
    class_location = "\"" + row[18] + "\""
    if class_time == "":
        if mid_plan == "":
            if final_plan == "":
                sql = "insert into graduate.class_elective (class_no, class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%d, %s, %d, %s, %d, null, %d, %d, %d, %d, %d, %d, %d, %d, null, null, %s, %s)" %(class_no, class_name, int(course_id), professor_name, int(class_division), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), extra_plan, class_location)
            else:
                final_plan == int(row[16])
                sql = "insert into graduate.class_elective (class_no, class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%d, %s, %d, %s, %d, null, %d, %d, %d, %d, %d, %d, %d, %d, null, %d, %s, %s)" %(class_no, class_name, int(course_id), professor_name, int(class_division), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(final_plan), extra_plan, class_location)   
        else:
            mid_plan = int(row[15])
            if final_plan == "":
                sql = "insert into graduate.class_elective (class_no, class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%d, %s, %d, %s, %d, null, %d, %d, %d, %d, %d, %d, %d, %d, %d, null, %s, %s)" %(class_no, class_name, int(course_id), professor_name, int(class_division), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(mid_plan), extra_plan, class_location)   
            else:
                final_plan == int(row[16])
                sql = "insert into graduate.class_elective (class_no, class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%d, %s, %d, %s, %d, null, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %s, %s)" %(class_no, class_name, int(course_id), professor_name, int(class_division), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(mid_plan), int(final_plan), extra_plan, class_location)
    else:
        try:
            class_time = int(float(row[6]))
        except:
            print(row[5])
        if mid_plan == "":
            if final_plan == "":
                sql = "insert into graduate.class_elective (class_no, class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%d, %s, %d, %s, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, null, null, %s, %s)" %(class_no, class_name, int(course_id), professor_name, int(class_division), int(class_time), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), extra_plan, class_location)
            else:
                final_plan == int(row[16])
                sql = "insert into graduate.class_elective (class_no, class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%d, %s, %d, %s, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, null, %d, %s, %s)" %(class_no, class_name, int(course_id), professor_name, int(class_division), int(class_time), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(final_plan), extra_plan, class_location)   
        else:
            mid_plan = int(row[15])
            if final_plan == "":
                sql = "insert into graduate.class_elective (class_no, class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%d, %s, %d, %s, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, null, %s, %s)" %(class_no, class_name, int(course_id), professor_name, int(class_division), int(class_time), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(mid_plan), extra_plan, class_location)   
            else:
                final_plan == int(row[16])
                sql = "insert into graduate.class_elective (class_no, class_name, course_id, professor_name, class_division, class_time, class_credit, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%d, %s, %d, %s, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %s, %s)" %(class_no, class_name, int(course_id), professor_name, int(class_division), int(class_time), int(class_credit), int(exam_per), int(quiz_per), int(presentation_per), int(project_per), int(assignment_per), int(attendance_per), int(extra_per), int(mid_plan), int(final_plan), extra_plan, class_location)
       # sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time, exam_per, quiz_per, presentation_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location) values (%s, %d, %s, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %d, %s, %s)" %(class_name, course_id, professor_name, class_division, class_time, exam_per, quiz_per, presentation_per, project_per, assignment_per, attendance_per, extra_per, mid_plan, final_plan, extra_plan, class_location)
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()