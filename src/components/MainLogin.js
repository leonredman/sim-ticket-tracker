import React from 'react';
import LoginForm from './LoginForm';
import DemoLogin from './DemoLogin';

const MainLogin = () => {
    return ( 
        <div className="mainLoginContainer">
            <div className="ui grid">

                <div className="six wide centered column">
                    <LoginForm />
                </div>

                <div className="four wide centered column">
                    <DemoLogin />
                </div>

            </div>   
        </div>
    );
};

export default MainLogin;