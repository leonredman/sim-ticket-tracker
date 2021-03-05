import React from 'react';


const WorkTicket = () => {
    return (
        <div className=" ui container">

            <div className="ui divider"></div>

                <div className="WorkTicketContainer">
                    <h1>Issue Ticket </h1>
                    Web Design Services / Ticket # PWS -153178
                    <div className="ui divider"></div>

                    <div className ="ui grid">
                        <div className="row">              
                            <div className="two wide column">
                                <button>Edit</button>
                            </div>
                            <div className="two wide column">
                                <button>Comment</button>
                            </div>
                            <div className="two wide column">
                                <button>Assign</button>
                            </div>
                        </div>
                        

                        <div className="row">
                            <div className="three wide column">
                                Type - Website
                            </div>
                            <div className="three wide column">
                                Status - In Progress
                            </div>
                        </div>

                        <div className="row">
                            <div className="three wide column">
                                Priority
                            </div>
                            <div className="three wide column">
                                Medium
                            </div>
                        </div>

                        <div className="row">
                            <div className="three wide column">
                               Customer Name:
                            </div>
                            <div className="three wide column">
                                John Smith
                            </div>
                        </div>

                        <div className="row">
                            <div className="three wide column">
                               Customer Id:
                            </div>
                            <div className="three wide column">
                                123456789
                            </div>
                        </div>

                        <div className="row">
                            <div className="three wide column">
                               Customer Phone Number:
                            </div>
                            <div className="three wide column">
                                (123)456-7890
                            </div>
                        </div>

                        <div className="row">
                            <div className="three wide column">
                               Plan Type:
                            </div>
                            <div className="three wide column">
                                Standard
                            </div>
                        </div>

                        <div className="row">
                            <div className="three wide column">
                               Domain:
                            </div>
                            <div className="three wide column">
                                www.customersite.com
                            </div>
                        </div>

                        <div className="row">
                            <div className="three wide column">
                               Notes
                            </div>
                            <div className="three wide column">
                                Type notes for the customer here
                            </div>
                        </div>

                        <div className="row">
                            <div className="three wide column">
                               Attachements
                            </div>
                            <div className="three wide column">
                            <img alt="placeholder1" src="https://placeimg.com/100/100/any" />
                            </div>
                            <div className="three wide column">
                            <img alt="placeholder2" src="https://placeimg.com/100/100/animals" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="three wide column">
                               Activity
                            </div>
                            <div className="six wide column">
                                Anthony Made Changes 8 hrs ago
                            </div>
                        </div>


                        
                    </div>
                    
                </div>
                
        </div>
    );
};

export default WorkTicket;