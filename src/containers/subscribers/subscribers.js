import React, { Component } from 'react';
import axios from 'axios';

class Subscribers extends Component {

    constructor() {
        super();
        this.state = { subscribers: [] }
    }
    
    componentDidMount() {
        // get subscribers
        axios.get(this.props.subscribersUrl)
            .then(res => {
                this.setState({ subscribers: res.data })
             });
    }

    render = () => (
        <div >
            {
                // Object.keys(this.state.subscribers).map((key, index) =>
                //     <div key={index}>
                //         <span> {key} : </span> <span> {this.state.languages[key]} </span>
                //     </div>
                // )
            }
        </div>
    );
}
export default Subscribers;