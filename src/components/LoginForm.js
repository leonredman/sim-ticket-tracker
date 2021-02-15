import './LoginForm.css';
import React from 'react';

const LoginForm = () => {
   return ( 
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
   );
};

export default LoginForm;