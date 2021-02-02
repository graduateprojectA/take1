/*
CourseCheck: 사용자가 들은 과목 입력받음
*/

import React from "react";
import {Link, Route} from "react-router-dom";

const CourseCheck = () => {
    return(
        <div>
            CourseCheck
            <Link to = "./Main">
                저장하기
            </Link>
        </div>
    );
};

export default CourseCheck;