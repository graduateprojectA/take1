import axios from 'axios';
class UserService {
    createUser(user) {
        return axios.post("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/user", user);
    }
    loginUser(user) {
        return axios.post("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/login", user);
    }
    TimeUser(time) {
        return axios.post("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/tableCheck", time);
    }
    login() {
        return axios.get("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/login2");
    }
    courseUser(user_no) {
        return axios.post("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/courseUser",user_no);
    }
    SendClassUser(user_course) {
        return axios.post("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/courseCheck", user_course);
    }
    course2User() {
        return axios.get("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/course");
    }
    classUser(user_no) {
        return axios.post("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/classUser", user_no);
    }
    class2User() {
        return axios.get("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/class");
    }
    CheckClassUser(user_class) {
        return axios.post("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/classCheck", user_class);
    }
    postUser(user_no){
        return axios({method :'post',
        url:'http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/courseUser', 
        headers :{'Content-Type': 'application/json' }, 
        data: user_no});
    }
    SendPre(pre) {
        return axios.post("http://ec2-3-35-209-240.ap-northeast-2.compute.amazonaws.com:8080/api/preferenceUser", pre);
    }
}

export default new UserService();