import axios from 'axios';

const TIMETABLE_API_BASE_URL = "http://localhost:8080/api/timetable";

class TimetableService {

    getTimetable() {
        return axios.get(TIMETABLE_API_BASE_URL);
    }
}

export default new TimetableService();