# -*- coding: utf-8 -*-
import scipy.io
import csv
import pymysql

# Majors
conn = pymysql.connect(host='database-1.c0vf4uulw0ya.ap-northeast-2.rds.amazonaws.com', user='root', password='12345678', db='graduate', charset='utf8')
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
    sql = "insert into graduate.Check_field (major_no, student_id, check_field_name, check_field_number, check_field_credit) values(%d, %d, %s, %d, %d);" %(major_no, student_id, check_field_name, check_field_number, check_field_credit)
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()