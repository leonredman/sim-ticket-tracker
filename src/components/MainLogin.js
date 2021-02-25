import React from 'react';

const MainLogin = () => {
    return ( 
        <div className="mainLoginContainer">
            <div className="ui grid">

            <div className="six wide centered column">
       <div className="loginContainer">
            <h1>Log In</h1>
            <form className="ui form">
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
                            <input type="text" name="password" />
                        </label>
                    </div>
                        <br />
                            <input type="checkbox" name="remember" /> Remember me
                                <br />
                                <br />
                                    <input type="submit" value="Submit" />
            </form>
            <br />
                <div>
                    <h3>Register as a new User</h3>
                </div>
                <br />
                <div>
                    <h3>Forgot your Password?</h3>
                </div>
        </div>
        </div>
<div className="four wide centered column">

        <div className="DemoLoginContainer" style={{marginTop: '60px', display: 'flex', flexDirection: 'column'}}>
            <h1>Demo Log In</h1>

        <button className="ui button" style={{margin: '6px'}}>Admin Login</button>
        <button className="ui button" style={{margin: '6px'}}>Manager Login</button>
        <button className="ui button" style={{margin: '6px'}}>Developer Login</button>
        <button className="ui button" style={{margin: '6px'}}>Quality Control Login</button>

        <p>All newly registered users are assigned 
        the role of Submitter. You can demo other roles for 
        this application without registering.</p>
        </div>
        </div>
            </div>   
        </div>
    );
};

export default MainLogin;