# graduate
create table Majors(
major_no int auto_increment,
major_name char(100) not null,
primary key(major_no)
);

# 사용자 정보 입력
# ID, 학번, PW, 전공, 학년, 학점
create table User(
user_no int auto_increment, #인덱스
user_id int not null, #학번
user_pw varchar(100) not null, #비밀번호
user_major int not null, 
user_grade int,
primary key(user_no),
foreign key(user_major) references Majors(major_no) on update cascade on delete cascade 
);

# 영역 #제발 강의랑 헷갈리지 마세요 #ex)이화진선미
# 인덱스,학번,전공,영역,영역에서 요구하는 강의 수, 영역에서 요구하는 강의 학점
create table Field(
field_no int auto_increment primary key,
student_id int not null,   #학번 18, 19, 20, 21
field_name varchar(30),
field_number int, #영역 개수
field_credit int,
major_no int,
foreign key(major_no) references Majors(major_no) on update cascade on delete cascade
);


# 실제 전공계획안에 있는 강의명
# 인덱스,학번,전공,영역,학수번호,강의명, 권장학년,권장학기,시간,학점,선수과목학수번호
create table Course(
course_no int auto_increment primary key,
major_no int not null,
student_id int not null,
field_no int not null,
course_id int, #학수번호
course_name varchar(50),
course_grade int,    #권장학년
course_semester int,
course_hours decimal(2,1),     #시간(일주일에 몇시간인지)
course_credit int,      #학점
pre_course_id int,       #선수과목 학수번호
foreign key(major_no) references Majors(major_no) on update cascade on delete cascade,
foreign key(field_no) references Field(field_no) on update cascade on delete cascade
);

#이번학기 열리는 강의(분반 포함) 만약 가중치가 생긴다면 과목마다 여기에 추가하면 됨
#인덱스, 강의인 알아서 봐!
create table Class(
class_no int auto_increment primary key,
class_name varchar(300),
course_id int,    #학수번호
professor_name varchar(100),
class_division int,    # 분반
class_time int    #해당학기의 시간
);

create table User_time(
time_id int auto_increment primary key,
user_no int not null,
time_mon int, #10111111
time_tue int,
time_wed int,
time_thr int,
time_fri int,
foreign key(user_no) references User(user_no) on update cascade on delete cascade
);

create table User_class(
user_class_id int auto_increment primary key,
user_no int not null,
class_no int not null,
class_pre boolean,
class_next boolean,
foreign key(user_no) references User(user_no) on update cascade on delete cascade,
foreign key(class_no) references Class(class_no) on update cascade on delete cascade
);

create table User_timetable(
user_timetable_no int auto_increment primary key,
timetable_number int not null,
class_no int not null,
user_no int not null,
credit int not null, # 사입듣학
foreign key(class_no) references Class(class_no) on update cascade on delete cascade,
foreign key(user_no) references User(user_no) on update cascade on delete cascade
);
