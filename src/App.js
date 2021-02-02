import React from 'react';
import LoginForm from './components/LoginForm';
import DemoLogin from './components/DemoLogin';
//import AccountRegister from './components/AccountRegister';


const widgetz = () => { //this fixes error
//export default () => {
    return(
        <div className="ui container">
            <div className="ui grid">
                <div className="ui row">
                    <div className="six wide column">
                        <LoginForm />
                    </div>
                    
                    <div className="eight wide column">
                            <DemoLogin />
                    </div>
                </div>
            </div>

            {/* <div className="eight wide column">
                            <AccountRegister />
                    </div> */}
        </div>
   );
};
export default widgetz; // this fixes error