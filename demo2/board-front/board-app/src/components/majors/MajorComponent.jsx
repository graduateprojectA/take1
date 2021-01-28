import React, { Component } from 'react';
import MajorService from '../../service/MajorService';
class MajorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            no: this.props.match.params.no,
            majors: {}
        }


    }

    componentDidMount() {
        MajorService.getOneMajorFromId(this.state.no).then( res => {
            this.setState({majors: res.data});
            console.log("get result => "+ JSON.stringify(res.data));
        });

        
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> Read Detail</h3>
                    <div className = "card-body">
                        <table>
                        
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

export default MajorComponent;