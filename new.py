# -*- coding: utf-8 -*-
import scipy.io
import csv
import pymysql

# Majors
conn = pymysql.connect(host='127.0.0.1', user='root', password='wlsgml214', db='graduate', charset='utf8')
curs = conn.cursor()
conn.commit()
f = open('Majors.csv','r',encoding = 'utf-8-sig')
csvReader = csv.reader(f)
for row in csvReader:    
    major_name = row[0]
    major_name = "\"" + major_name + "\""
    sql = "insert into graduate.majors (major_name) values (%s)" %(major_name)
    curs.execute(sql)
conn.commit()
f.close() 
conn.close()