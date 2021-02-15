import React from 'react';
//import LoginForm from './components/LoginForm';
//import DemoLogin from './components/DemoLogin';
//import SideMenu from './components/SideMenu';
import Header from './components/Header';
//import AccountRegister from './components/AccountRegister';
import Dashboard from './components/Dashboard';


const tracker = () => { //this fixes error
//export default () => {
    return(
        <div>
            <div>
                <Header />
            </div>

            <div className="ui grid">
                <div className="ui row">
                    
                    {/* <div className="three wide column">
                        <SideMenu />
                    </div> */}

                        {/* <div className="six wide centered column">
                            <LoginForm />
                        </div> */}
                        
                            {/* <div className="four wide centered column">
                                    <DemoLogin />
                            </div> */}

                                {/* <div className="six wide centered column">
                                    <AccountRegister />
                                </div> */}

                                <div className="sixteen wide column">
                                    <Dashboard />
                                </div>
                                
                </div>
            </div>
           

           
        </div>
   );
};
export default tracker; // this fixes error