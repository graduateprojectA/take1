# -*- coding: utf-8 -*-
import scipy.io
import csv
import pymysql
conn = pymysql.connect(host='127.0.0.1', user='root', password='1234',
                       db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('query_insert2.csv','r',encoding = 'utf-8')
csvReader = csv.reader(f)
next(csvReader)
for row in csvReader:    
    class_name = row[0]
    class_name = "\"" + class_name + "\""
    course_id = int(row[1])
    professor_name = row[2]
    professor_name = ''.join(professor_name.split())
    professor_name = "\"" + professor_name + "\""
    class_division = int(row[3])
    class_time = row[5]
    if class_time == "null":
        sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time) values (%s, %d, %s, %d, null)" %(class_name, course_id, professor_name, class_division)
    else:
        try:
            class_time = int(float(row[5]))
        except:
            print(row[5])
        sql = "insert into graduate.class (class_name, course_id, professor_name, class_division, class_time) values (%s, %d, %s, %d, %d)" %(class_name, course_id, professor_name, class_division, class_time)
    curs.execute(sql)

# db의 변화 저장
conn.commit()
f.close()
conn.close()
