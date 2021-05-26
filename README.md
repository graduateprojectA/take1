# (●'◡'●) 졸업프로젝트 CurVelio를 소개합니다 (●'◡'●)

## 1) 시연 영상 (유튜브채널 주소) 📽

Web Site 'CurVelio' Demonstration Video: 
<br>
(Web Site 'CurVelio' Prototype Video: https://www.youtube.com/watch?v=jL7Vck2iIyc&feature=youtu.be)

## 2) 프로젝트에 대한 소개✏

CurVelio는 시간표 자동 생성 웹사이트로, 각 학번과 학기에 맞는 커리큘럼에 따라, 강의를 표시하고, 시간표를 자동으로 생성해주는 웹입니다.사용자에게 맞춤형 시간표를 제공함으로써, 기존에 시간표 설계의 불편함을 해결해 줍니다. <br>
저희는 사용자로부터 학번, 학기, 들을 학점 수, 원하지 않는 시간대, 원하지 않는 분반, 그리고 사용자가 중요하게 생각하는 항목의 가중치값(건물 간 거리, 공강 시간 등)을 입력받습니다.
<br>
사용자의 입력값에 따라, 시간표가 자동으로 생성됩니다. 
<br>
만약, 강의 시간이 겹치는 경우와 같이 생성된 시간표의 학점이 들을 학점 수보다 부족하다면, 나머지 학점을 채울 수 있는 교양 과목을 추천해줍니다.

CurVelio is an auto-generated website that displays lectures and automatically generates schedules according to the curriculum for each class and semester.It solves the inconvenience of traditional timetable designs by providing customized timelines to users. <br>
We receive student numbers, semesters, the number of credits to be taken, unwanted time zones, unwanted divisions, and the weighting of items that you consider important (such as distance between buildings, time between classes, etc.).
<br>
The user's input automatically generates timetables.
<br>
If the credits in the generated timetable, such as when the lecture times overlap, are less than the number of credits to be taken, then we recommend a liberal arts course to fill the remaining credits.

### 시나리오 설계 (보류)

1. 사용자로부터 학번, 해당 학년/학기, 여태 들은 수업, 수업 방식에 대한 가중치값, 원하지 않는 시간대를 입력받습니다.
2. 1번의 과정을 통해 걸러진 수업과 여러 분반들을 출력하고, 사용자로부터 원하지 않는 수업 분반을 입력받습니다. 
3. 1번과 2번 과정을 고려하여 최적의 시간표를 생성합니다.
4. 추가적으로 빈 시간대에 추천할 만한 교양 수업을 추천합니다. 
<br>
사용자의 입력값에 따라, 시간표가 자동으로 생성됩니다. 
<br>
만약, 강의 시간이 겹치는 경우와 같이 생성된 시간표의 학점이 들을 학점 수보다 부족하다면, 나머지 학점을 채울 수 있는 교양 과목을 추천해줍니다.

### 프로젝트 구조(architecture)

<img src = "https://user-images.githubusercontent.com/55133538/101370660-1d01e480-38ed-11eb-8fcb-a38c826db387.png" width="600px">
<img src = "https://user-images.githubusercontent.com/55133538/101752471-e9090800-3b14-11eb-98a3-1486cab2098a.png" width="600px">



## 3) To Do List📃

전체적인 구조
- [x] React & Spring boot 연동
- [x] UI 설계
- [ ] React 
- [ ] SpringBoot
- [x] Java Algorithm
- [x] DEMO 코드 완성 (html,js,php 등 사용) - Repository demo 참고.

작업
- [x] DB: 2021-1 모든 수업 DB에 입력
- [ ] 컴퓨터공학과를 비롯한 모든 전공 18~21학번 커리큘럼 DB에 입력
- [x] 분반 별 가능한 모든 시간표 생성 가능 (가중치값 고려)
- [x] 사용자가 입력값과 DB 연동 
- [x] 강의 계획안 크롤링
- [x] 사용자에게 맞춤형 (교양)수업 추천

화면 명세서
- [x] 메인 : 로그인/회원가입
- [x] 로그인
- [x] 회원가입
- [x] 여태 들었던 수업 체크
- [x] 가중치값 설정
- [x] 원하지 않는 시간대 체크
- [x] 이번 학기 추천 수업 확인 및 원하지 않는 분반 체크
- [ ] 마이페이지(커리큘럼 )
- [ ] 시간표 최종본 출력
- [x] 시간표 조합 알고리즘 
- [x] 교양 추천 알고리즘 


## 4) Reference🔗
[React] React blog : https://reactjs.org/blog/2020/10/20/react-v17.html<br>
콘텐츠 기반 추천 알고리즘 : https://techblog-history-younghunjo1.tistory.com/115<br>

## 5) 팀원 소개 및 기술 블로그🔨

김서영(Seoyeong Kim) : https://velog.io/@ksy990628/series/%EC%BA%A1%EC%8A%A4%ED%86%A4%EB%94%94%EC%9E%90%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8
<br><br>
변영신(Yeongsin Byeon) : https://velog.io/@dudtls11444/%EC%A1%B8%EC%97%85%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-1.-%EC%95%84%EC%9D%B4%EB%94%94%EC%96%B4-%EB%B0%8F-%EA%B8%B0%EB%B3%B8-%EA%B5%AC%EC%83%81
<br><br>
장진희(Jinhui Chang) :https://velog.io/@betty214/%EC%BB%A4%EB%B2%A8%EB%A6%AC%EC%98%A4Curvelio-%EC%8B%9C%EA%B0%84%ED%91%9C-%EC%83%9D%EC%84%B1-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8
