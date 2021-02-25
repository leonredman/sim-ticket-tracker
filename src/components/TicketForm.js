import React from 'react';

    const TicketForm = () => {
        return ( 
            <div className="newTicketContainer">

                <div className="ui grid">
                    <div className="ui row">

                        <div className="six wide centered column">
                            <h1>Create A New Ticket</h1>
                        </div>
                    </div>
      
                        <div className="ui row">
                            <div className="eight wide centered column">

                                <form className="ui form">
                                    <div className="field">
                                        <label>
                                            Customer Name:
                                            <input type="text" name="name" />
                                        </label>
                                    </div>
                                    <div className="field">
                                        <label>
                                            Customer ID Number:
                                            <input type="text" name="id" />
                                        </label>
                                    </div>
                                    <div className="field">
                                        <label>
                                            Email:
                                            <input type="email" name="email" />
                                        </label>
                                    </div>
                                    <div className="field">
                                        <label>
                                            Phone Number:
                                            <input type="text" name="phoneNumber" />
                                        </label>
                                    </div>
                                    <div className="field">
                                        <label>
                                            Domain:
                                            <input type="text" name="domain" />
                                        </label>
                                    </div>
                                    <div className="field">
                                        <label>
                                        Plan Type
                                        </label>  
                                        <div className="ui selection dropdown">
                                            <input type="hidden" name="planType" />
                                                <i className="dropdown icon" />
                                                    <div className="default text">Standard</div>
                                                        <div className="menu">
                                                                <div className="item" data-value="1">Standard</div>
                                                                <div className="item" data-value="0">Premium</div>
                                                                <div className="item" data-value="0">Deluxe</div>
                                                        </div>
                                        </div>                 
                                    </div>


                                    <div className="field">
                                        <label>
                                            Notes:
                                        </label> 
                                        <textarea></textarea>                         
                                    </div>
                                        <br />
                                            <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                </div>
            </div>
    );
};

export default TicketForm;