import React, { Component } from 'react'

import data from '../data/data.json';

// this maps the imported data with a variable nb =true and creates newbuild list
 const status = "In Progress";
 const inProgressList = data.filter((obj) => obj.status === status);
//  console.log(inProgressList);


class ticketProgressList extends Component {
    constructor(props) {
        super(props);
            this.state = { data }       
    };

    render() {
        return (
            
            <div className="lists"> 
                <table className="ui fixed table">
                    <thead>
                        <tr>
                        <th>Summary</th>
                        <th>ShopperId</th>
                        <th>Created</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { inProgressList.map(post => {
                        
                        return(
                               
                            <tr key={post.shopperId}>
                                <td>{post.type}</td>
                                <td>{post.shopperId}</td>
                                <td>{post.created}</td>
                                <td>{post.status}</td>
                            </tr>                              
                        );
                        })}
                    </tbody>
                </table>
            </div>
            );
        };
    };
        
export default ticketProgressList;

