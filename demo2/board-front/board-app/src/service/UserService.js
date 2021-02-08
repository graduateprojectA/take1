import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/test";
var a ="this is teststring";
class UserService {
    
    getBoards(p_num) {
        return axios.get(USER_API_BASE_URL + "?p_num="+ p_num);
    }
/*
     getUsers() {
      return axios.get(USER_API_BASE_URL);
     }
*/
    createUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }
    createTest() {
        return axios.post(USER_API_BASE_URL, a);
    }

    getOneUser(user_no) {
        return axios.get(USER_API_BASE_URL + "/" + user_no);
    }

    updateUser(user_no, user) {
        return axios.put(USER_API_BASE_URL + "/" + user_no, user);
    }

    deleteUser(user_no) {
        return axios.delete(USER_API_BASE_URL + "/" + user_no);
    }


}

export default new UserService();