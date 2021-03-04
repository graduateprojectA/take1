import axios from 'axios';
class UserService {
    createUser(user) {
        return axios.post("http://localhost:8080/api/user", user);
    }
    loginUser(user) {
        return axios.post("http://localhost:8080/api/login", user);
    }
    TimeUser(time) {
        return axios.post("http://localhost:8080/api/tableCheck", time);
    }
    login() {
        return axios.get("http://localhost:8080/api/login2");
    }
    courseUser() {
        return axios.get("http://localhost:8080/api/course");
    }
    SendClassUser(user_course) {
        return axios.post("http://localhost:8080/api/?", user_course);
    }
}

export default new UserService();