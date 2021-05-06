import React, { Component } from 'react'

//import { useAuth0 } from "@auth0/auth0-react";
import data from '../data/data.json';

const newData = data.map( (data) => {
    console.log(data);
});

const revisions = true;
const revsTotalCount = data.filter((obj) => obj.revisions === revisions).length;

console.log(revsTotalCount);

class inProgressTotals extends Component {

    render() {
        return (
            <div className="totals"> 
            <p>{revsTotalCount}</p>
            </div>
     )};
    }

export default inProgressTotals;