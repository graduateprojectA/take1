import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBoardComponent from './components/CreateBoardComponent';
import ReadBoardComponent from './components/ReadBoardComponent';
import MajorComponent from './components/majors/MajorComponent';
import TimetableComponent from './components/TimetableComponent';
import Intro from "./cservice/Intro";
import Main from "./cservice/Main";
import Join from "./cservice/Join";
import Login from "./cservice/Login";
import CourseCheck from "./cservice/CourseCheck";
import MyPage from "./cservice/MyPage";
import ClasCheck from "./cservice/ClassCheck";
import EventPractice from "./cservice/EventPractice";
import CreateUserComponent from './components/CreateUserComponent';
import ListUserComponent from './components/ListUserComponent';
import ReadUserComponent from './components/ReadUserComponent';
import LoginUserComponent from './components/LoginUserComponent';
import CheckTimeComponent from './components/CheckTimeComponent';

function App() {
  return (
    <div> 
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path = "/"component={Intro} exact={true} />
              <Route path="/intro" component={Intro} exact={true} />
              <Route path = "/tableCheck" component = {EventPractice} exact={true} />
              <Route path = "/create-board/:no" component = {CreateBoardComponent}></Route>
              <Route path = "/read-board/:no" component = {ReadBoardComponent}></Route>
              <Route path = "/major/:no" component = {MajorComponent}></Route>
              <Route path="/main" component={Main} exact={true} />
              <Route path="/join" component={Join} exact={true} />
              <Route path="/tableCheck/:user_no" component={CheckTimeComponent}></Route>
              <Route path="/courseCheck" component={CourseCheck} exact={true} />
              <Route path="/myPage" component={MyPage} exact={true} />
              <Route path="/classCheck" component={ClasCheck} exact={true} />
              <Route path = "/timetable" component = {TimetableComponent}></Route>
              <Route path = "/user" component = {ListUserComponent}></Route>
              <Route path = "/create-user/:user_no" component = {CreateUserComponent}></Route>
              <Route path = "/:user_no" component = {LoginUserComponent}></Route>
              <Route path = "/read-user/:user_no" component = {ReadUserComponent}></Route>
            render={({ location }) => (
              <div>
                <h2>ERROR</h2>
                <h2>이 페이지는 존재하지 않습니다.</h2>
              </div>
            )}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
