import React from 'react';

const ResetPassword = () => {
    return ( 
        <div className="ResetPasswordContainer"> 
             <div className="ui grid">
                <div className="ui centered row">
                    <h1>Reset Your Password</h1>
                </div>
                <div className="ui row">
                        <div className="six wide centered column">
                            <form className="ui form">
                                <div className="field">
                                    <label>
                                        First Name:
                                        <input type="text" name="firstname" />
                                    </label>
                                </div>
                                
                                <div className="field">
                                    <label>
                                        Last Name:
                                        <input type="text" name="lastname" />
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
                                        Password:
                                        <input type="password" name="password" />
                                    </label>                          
                                </div>
                                            
                                <div className="field">
                                    <label>
                                        Confirm Password:
                                        <input type="password" name="password" />
                                    </label>                          
                                </div>
                                            
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div> 

            </div>
            </div>

);
};

export default ResetPassword;