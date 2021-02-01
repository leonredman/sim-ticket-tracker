import React from 'react';


const AcctRegister = () => {
    return ( 
         <div className="newAcctContainer">
             <h1>Create a new account</h1>
             <form className="ui form">
                 <div className="field">
                 <label>
                     First Name:
                     <input type="text" name="firstname" />
                 </label>
                 </div>
                   <br />
                     <div className="field">
                         <label>
                             Last Name:
                             <input type="text" name="lastname" />
                         </label>
                     </div>
                    <br />
                    <div className="field">
                        <label>
                            Email:
                            <input type="email" name="email" />
                        </label>
                    </div>
                    <br />
                        <div className="field">
                            <label>
                                Password:
                                <input type="password" name="password" />
                            </label>                          
                        </div>
                                 <br />
                                 <div className="field">
                            <label>
                                Confirm Password:
                                <input type="password" name="password" />
                            </label>                          
                        </div>
                                 <br />
                                <input type="submit" value="Submit" />
             </form>
                <br />        
         </div>
    );
 };
 
 export default AcctRegister;