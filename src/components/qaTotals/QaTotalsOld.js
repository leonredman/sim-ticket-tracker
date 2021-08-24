import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import data from '../database/data.json';

// const newData = data.map( (data) => {
//     console.log(data);
// });

const qaStatus = "In Progress";
const qaTotalCount = data.filter((obj) => obj.qaStatus === qaStatus).length;

//  console.log(qaTotalCount);

class qaTotals extends Component {
    constructor(props) {
        super(props);

        this.state={ qaTotalCount }
    }

    render() {
        return (
            <div className="totals">
                <p>{qaTotalCount}</p>
            </div>
    )};
};

export default qaTotals;