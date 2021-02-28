# -*- coding: utf-8 -*-
import scipy.io
import csv
import pymysql
conn = pymysql.connect(host='127.0.0.1', user='root', password='1234',
                       db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('query_insert.csv','r',encoding = 'utf-8')
csvReader = csv.reader(f)
next(csvReader)
for row in csvReader:    
    class_name = (row[0])
    class_name = "\"" + class_name + "\""
    class_id = int((row[1]))
    professor_name = (row[2])
    professor_name = "\"" + professor_name + "\""
    class_division = int((row[3]))
    class_time = int((row[4]))
    sql = "insert into graduate.class (class_name, class_id, professor_name, class_division, class_time) values (%s, %d, %s, %d, %d)" %(class_name, class_id, professor_name, class_division, class_time)
    curs.execute(sql)

# db의 변화 저장
conn.commit()
f.close()
conn.close()
