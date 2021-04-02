import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Intro from "./cservice/Intro";
import Main from "./cservice/Main";
import CourseCheck from "./cservice/CourseCheck";
import MyPage from "./cservice/MyPage";
import preCheck from "./cservice/PreCheck";
import Timetest from "./cservice/Timetest";
import ClassCheck from "./cservice/ClassCheck";
import preClassCheck from "./cservice/preClassCheck";
import frontClass from "./cservice/frontClass";
import EventPractice from "./cservice/EventPractice";
import CreateUserComponent from './components/CreateUserComponent';
import LoginUserComponent from "./components/LoginUserComponent";
import CheckTimeComponent from './components/CheckTimeComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div> 
      hello?
      <Router>
          <div className="container">
            <Switch>
              <Route path = "/"component={Intro} exact={true} />
              <Route path="/intro" component={Intro} exact={true} />
              <Route path = "/tableCheck" component = {EventPractice} exact={true} />
              <Route path="/main" component={Main} exact={true} />
              <Route path="/tableCheck/:user_no" component={CheckTimeComponent}></Route>
              <Route path="/courseCheck" component={CourseCheck} exact={true} />
              <Route path="/preCheck" component={preCheck} exact={true} />
              <Route path="/myPage" component={MyPage} exact={true} />
              <Route path = "/time/table" component = {Timetest} exact={true} />
              <Route path="/classCheck" component={ClassCheck} exact={true} />
              <Route path="/preclassCheck" component={preClassCheck} exact={true} />
              <Route path="/frontClass" component={frontClass} exact={true} />
              <Route path = "/create-user/:user_no" component = {CreateUserComponent}></Route>
              <Route path = "/:user_no" component = {LoginUserComponent}></Route>
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
