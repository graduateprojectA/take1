# (●'◡'●) 졸업프로젝트 CurVelio를 소개합니다 (●'◡'●)

## 1) 프로젝트에 대한 소개✏

### 시연 영상 (유튜브채널 주소) 📽

'CurVelio' Demonstration Video: <br>

### 프로젝트 개발 배경

학생들은 시간표를 짤 때 고려해야 하는 사항이 많다. 지정된 학기에 들어야 하는 필수 과목, 선수 과목, 그 학기에 열리는 교과목의 정보, 수업 방식, 시간표 중복 여부, 시험 일정, 건물 간의 거리 등 꽤나 여러 가지 사항들을 복합적으로 고려해야 한다. 사람이 직접 하면 번거롭기만 할 뿐만 아니라, 시간도 오래 걸리며 심지어 정확성이 떨어져 놓치는 부분이 있기도 하다. Curvelio는 이와 같이 기존의 불편했던 점들을 해결하기 위해 개발한 서비스이다.
Students have many things to consider when making a timetable. Quite a number of things need to be considered, including the required courses, athlete courses, information on the subjects held during the semester, the method of classes, overlapping timetables, test schedules, and distance between buildings. Not only is it cumbersome for a person to do it himself, but it takes a long time and even misses parts due to lack of accuracy. Curvelio is a service developed to address these existing inconveniences.

### 프로젝트 소개

CurVelio는 시간표 자동 생성 웹사이트로, 각 학번과 전공, 학기에 맞는 커리큘럼에 따라, 강의를 표시하고, 시간표를 자동으로 생성해주는 웹입니다. 사용자에게 맞춤형 시간표를 제공함으로써, 기존에 시간표 설계의 불편함을 해결해 줍니다. <br>사용자는 학번, 전공, 여태들은 과목, 수업 평가 방식에 대한 가중치값, 원하지 않는 시간대, 원하지 않는 분반을 입력합니다.<br>최종적으로, 사용자의 커리큘럼과 기호에 따라, 최적의 시간표가 생성됩니다. 또한, 출력된 추천 시간표의 빈 시간대에 교양 수업을 추천합니다.<br>
CurVelio is an auto-generated website that displays lectures and automatically generates schedules according to the curriculum for each class and semester.It solves the inconvenience of traditional timetable designs by providing customized timelines to users. <br>
Users enter student numbers, majors, subjects so far, weight values for class evaluation methods, unwanted time zones, and undesired divisions.<br>
Finally, according to the user's curriculum and preferences, an optimal timetable is generated. Also, I recommend liberal arts classes during the free time of the printed recommendation timetable.<br>

### 개발 환경

![image](https://user-images.githubusercontent.com/55133538/120292323-2ea5d100-c2ff-11eb-9bca-d60e571fa929.png)

### 시나리오 설계

1. 사용자로부터 학번, 전공, 여태 들은 수업, 수업 방식에 대한 가중치값, 원하지 않는 시간대를 입력받습니다.
2. 1번의 과정을 통해 걸러진 수업과 여러 분반들을 출력하고, 사용자로부터 원하지 않는 수업 분반을 입력받습니다. 
3. 1번과 2번 과정을 고려하여 최적의 시간표를 생성합니다.
4. 추가적으로 빈 시간대에 추천할 만한 교양 수업을 추천합니다. 

### 프로젝트 알고리즘
![image](https://user-images.githubusercontent.com/55133538/120294603-5138e980-c301-11eb-9f72-bc1b1c0bdf69.png)

## 3) To Do List📃

전체적인 구조
- [x] React & Spring boot 연동
- [x] UI 설계
- [x] React 
- [x] SpringBoot
- [x] Java Algorithm
- [x] DEMO 코드 완성 (html,js,php 등 사용) - Repository demo 참고.

작업
- [x] 사용자가 입력값과 DB 연동
- [x] DB: 2021-1 모든 수업 DB에 입력
- [x] 모든 전공 18~21학번 커리큘럼 DB에 입력
- [x] 강의 계획안 크롤링
- [x] 최적의 시간표 출력
- [x] 사용자에게 맞춤형 (교양) 수업 추천

화면 명세서
- [x] 메인 : 로그인/회원가입
- [x] 여태 들었던 수업 체크
- [x] 가중치값 설정
- [x] 원하지 않는 시간대 체크
- [x] 이번 학기 추천 수업 확인 및 원하지 않는 분반 체크
- [x] 마이페이지
- [x] 시간표 최종본 출력
- [x] 시간표 조합 알고리즘 
- [x] 교양 추천 알고리즘 


## 4) Reference🔗

[React] https://reactjs.org/blog/2020/10/20/react-v17.html<br>
        https://blog.naver.com/rudnfskf2/222179376583
[SpringBoot] SpringBoot & RestApi : https://goddaehee.tistory.com/203?category=367461<br>
https://blog.naver.com/rudnfskf2/222179376583

## 5) 팀원 소개 및 기술 블로그🔨

김서영(Seoyeong Kim) : https://velog.io/@ksy990628
<br><br>
변영신(Yeongsin Byeon) : https://velog.io/@dudtls11444
<br><br>
장진희(Jinhui Chang) : https://velog.io/@betty214/%EC%BB%A4%EB%B2%A8%EB%A6%AC%EC%98%A4Curvelio-%EC%8B%9C%EA%B0%84%ED%91%9C-%EC%83%9D%EC%84%B1-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8
