import React, { Component } from 'react';
import TimetableService from '../service/TimetableService';
class TimetableComponent extends Component {

    componentDidMount() {
        TimetableService.getTimetable();
    }
    render() {
        return (
            <div>
                hello world?
            </div>
        );
    }
}

export default TimetableComponent;