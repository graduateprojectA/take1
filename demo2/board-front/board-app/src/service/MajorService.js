import axios from 'axios';

const MAJOR_API_BASE_URL = "http://localhost:8080/api/majors";

class MajorService {

    getOneMajorFromId(id) {
        return axios.get(MAJOR_API_BASE_URL + "/" + id)
    }
}

export default new MajorService();