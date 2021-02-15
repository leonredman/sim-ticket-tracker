import React from 'react';


const dashboard = () => {
    return ( 
         <div className="ui container">
             <div className="ui divider"></div>
             <h2 className="ui header">Hello Admin</h2>
             <div className="ui divider"></div>
             <div className ="ui centered grid">
                <div className="ui four column centered row">

                    <div className="column">
                        <div className="ui red segment">
                        New Tickets
                        <br />
                        17
                        </div>
                    </div>
                    
                    <div className="column">
                    <div className="ui blue segment">
                        Tickets In Progress<br />
                        5
                        </div>
                    </div>
                    
                    <div className="column">
                    <div className="ui green segment">
                        Tickets In QA<br />
                        8
                        </div>
                    </div>
                    
                    <div className="column">
                    <div className="ui yellow segment">
                        Completed Tickets<br />
                        33
                        </div>
                    </div>
                
                </div>

                <div className="ui two column centered row">

                <div className="column">
                    <div className="ui red segment">
                        New Tickets<br />
                        <table className="ui single line table">
                            <thead>
                                <tr>
                                <th>Summary</th>
                                <th>Shopper Id</th>
                                <th>Created</th>
                                <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>New Build</td>
                                <td>105966154</td>
                                <td>Feb 20, 2021</td>
                                <td>In Progress</td>
                                </tr>
                                <tr>
                                <td>Revisions 1</td>
                                <td>105966154</td>
                                <td>Feb 20, 2021</td>
                                <td>In Progress</td>
                                </tr>
                                <tr>
                                <td>Post Publish</td>
                                <td>105966154</td>
                                <td>Feb 20, 2021</td>
                                <td>In Progress</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="column">
                    <div className="ui blue segment">
                        Tickets In Progress<br />
                        <table className="ui single line table">
                            <thead>
                                <tr>
                                <th>Summary</th>
                                <th>Shopper Id</th>
                                <th>Created</th>
                                <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>New Build</td>
                                <td>105966154</td>
                                <td>Feb 20, 2021</td>
                                <td>In Progress</td>
                                </tr>
                                <tr>
                                <td>Revisions 1</td>
                                <td>105966154</td>
                                <td>Feb 20, 2021</td>
                                <td>In Progress</td>
                                </tr>
                                <tr>
                                <td>Post Publish</td>
                                <td>105966154</td>
                                <td>Feb 20, 2021</td>
                                <td>In Progress</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>
            </div>  

            <div className="ui two column centered row">

<div className="column">
<div className="ui violet segment">
    Ticket Status Overview
    <div className="ui fluid image" >
        <img alt="chart" src="https://chartio.com/assets/25c0ab/tutorials/charts/pie-charts/8f2915ab9024902155c5d27d430831be813de071853c69d778102722a4d0efbf/pie-chart-example-1.png" />
    </div>
    </div>
</div>

<div className="column">
<div className="ui green segment">
    Tickets In QA<br />
    <table className="ui single line table">
        <thead>
            <tr>
            <th>Summary</th>
            <th>Shopper Id</th>
            <th>Created</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>New Build</td>
            <td>105966154</td>
            <td>Feb 20, 2021</td>
            <td>In Progress</td>
            </tr>
            <tr>
            <td>Revisions 1</td>
            <td>105966154</td>
            <td>Feb 20, 2021</td>
            <td>In Progress</td>
            </tr>
            <tr>
            <td>Post Publish</td>
            <td>105966154</td>
            <td>Feb 20, 2021</td>
            <td>In Progress</td>
            </tr>
        </tbody>
        </table>
    </div>
</div>
</div>   

        </div>
        </div>
    );
 };
 
 export default dashboard;