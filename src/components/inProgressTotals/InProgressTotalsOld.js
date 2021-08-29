import React, { Component } from 'react'

// import { useAuth0 } from "@auth0/auth0-react";

 import data from '../database/data.json';

//  const newData = data.map( (data) => {
//      console.log(data);
//  });

 const type = "New Build";
 const count = data.filter((obj) => obj.type === type).length;

//  console.log(count);

class ticketTotals extends Component {
    constructor(props) {
      super(props);
   
      this.state = { count }
    }

      render() {
                return (
                    <div className="totals"> 
                    <p>{count}</p>
                    </div>
             )};
            
        };
        
        export default ticketTotals;