import React, { Component } from 'react';


import data from '../data/data.json';

// const newData = data.map( (data) => {
//     console.log(data);
// });

const status = "Complete";
const completeTotalCount = data.filter((obj) => obj.status === status).length;

// console.log(completeTotalCount);

class completedTotals extends Component {
    constructor(props) {
        super(props);

        this.state={ completeTotalCount }
    }

    render() {
        return (
            <div className="totals">
                <p>{completeTotalCount}</p>
            </div>
    )};
};

export default completedTotals;