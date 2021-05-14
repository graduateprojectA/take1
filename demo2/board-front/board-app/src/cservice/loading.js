import CourseCheck from "./CourseCheck";
import React, { Component} from 'react';
import "../css/style.css";
import UserService from '../service/UserService';
class loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_no:2,
            user_course: [
                {user_no : 1, class_no: "기독교와세계", class_pre: false,class_next:false},
                {user_no : 1, class_no: "공존과협력의유토피아", class_pre: false,class_next:false},
                {user_no : 1, class_no: "관계의미학:사랑과윤리", class_pre: false,class_next:false},
                {user_no : 1, class_no: "나눔리더십", class_pre: false,class_next:false},
            ],
            class: [],n:[],nextf:false,pref:false,page:[],p_class:[],t:[],y:0,end:0,start:0,
            testd:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        };
    }
    co(){
      this.props.history.push('./courseCheck');
    };
    componentDidMount() {
        UserService.login().then((res) => {
            this.setState({ user_no: res.data });
            UserService.postUser(this.state.user_no).then((res)=>{
                UserService.course2User().then((res) => {
                  this.setState({ user_course: res.data});
                  console.log("get result => " + JSON.stringify(res.data));
                  let s=0;
                  this.setState({page : res.data.map(p =>
                    this.state.p_class = {
                      user_course_no : p.user_course_no,
                      page_no: s++,
                      course_no: p.course_no,
                      course_name:p.course_name
                  })});
                  this.setState({end:s/15+1});
                  this.setState({ n: this.state.page.filter(p=>p.page_no>=0&&p.page_no<15)});
                });
            });
        });
    }

    render() {
        return (
          <div>
          <CourseCheck user_no={this.state.user_no} user_course={this.state.user_course} page={this.state.page} end={this.state.end} n={this.state.n}><button onClick={this.co} >Next</button></CourseCheck>
          
          </div>
        );
    }
}


export default loading;