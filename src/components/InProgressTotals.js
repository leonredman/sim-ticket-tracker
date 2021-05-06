import React, { Component } from 'react'

import data from '../data/data.json';

// const newData = data.map( (data) => {
//     console.log(data);
// });

const status = "In Progress";
const progressTotalCount = data.filter((obj) => obj.status === status).length;

// console.log(progressTotalCount);

class inProgressTotals extends Component {
    constructor(props){
        super(props);

        this.state={ progressTotalCount }
    };

    render() {
        return (
            <div className="totals"> 
                <p>{progressTotalCount}</p>
            </div>
        )};
    };

export default inProgressTotals;