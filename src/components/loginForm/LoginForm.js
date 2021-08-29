import './LoginForm.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
   return ( 
        <div className="loginContainer">          
            <h1>LOGIN</h1>
            <form className="ui form">
                <div className="field">
                <label>
                    EMAIL ADDRESS:
                    <input type="email" name="email" />
                </label>
                </div>
                  <br />
                    <div className="field">
                        <label>
                            PASSWORD:
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
                    <Link to="/AccountRegister" className="item">Register as a new User</Link>

                </div>
                <br />
                <div>
                    <Link to="/ResetPassword" className="item">Forgot your Password?</Link>
                    </div>
        </div>
   );
};

export default LoginForm;