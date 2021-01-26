# 사용자 정보 입력
# ID, PW, 전공, 학년, 학점
create table user(
user_id int not null,  #ID는 학번이 될 것
user_pw varchar(100) not null,
user_major varchar(200) not null,
user_grade int not null,
user_credit int,
primary key(user_id)
);


# 실제 전공계획안에 있는 커리큘럼 (카테고리)
# 인덱스,학번,전공,영역,영역에서 요구하는 강의 수, 영역에서 요구하는 강의 학점
create table curriculum(
curriculum_id int auto_increment primary key,
student_id int not null,   #학번 18, 19, 20, 21
major varchar(50)not null,
field_name varchar(30),
field_number int, #영역 개수
field_credit int
)


# 실제 전공계획안에 있는 커리큘럼 (강의)
# 인덱스,학번,전공,영역,학수번호,강의명, 권장학년,권장학기,시간,학점,선수과목학수번호
create table curriculum_subjects(
curriculum_id int auto_increment primary key,
student_id int,   #학번 18, 19, 20, 21
major varchar(50),
field_name	varchar(30),
course_id 		int,
course_name	varchar(50),
course_grade      	int, 	#권장학년
course_semester 	int,
course_time 	 decimal(2,1),  	#시간
course_credit  	int		#학점,
pre_course_id   int 		#선수과목 학수번호
)


# 선택되지 않은 커리큘럼 (강의) == 이제 들어야 할 강의
# 인덱스,학번,전공,영역,학수번호,강의명
create table todo(
curriculum_id int auto_increment primary key,
student_id int,   #학번 18, 19, 20, 21
major varchar(50),
field_name	varchar(30),
course_id 		int,
course_name	varchar(50)
)


# 사용자가 원하지 않는 시간대 선택 
# ID, 원하지 않는 시간대 선택
create table timeout(
user_id int not null,
time_out bigint,
primary key(user_id)
);


#사용자가 원하지 않는 분반 선택
#
