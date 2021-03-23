import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
//import LoginForm from './components/LoginForm';
//import DemoLogin from './components/DemoLogin';
//import SideMenu from './components/SideMenu';
import Header from './components/Header';
import AccountRegister from './components/AccountRegister';
import TicketForm from './components/TicketForm';
import Dashboard from './components/Dashboard';
import MainLogin from './components/MainLogin';
import ResetPassword from './components/ResetPassword';
import WorkTicket from './components/WorkTicket';



const tracker = () => { //this fixes error
//export default () => {
    return(
        <div>
           
            <div>
                <BrowserRouter>
                <Header />
                <Route path="/" exact component={ MainLogin } />
                <Route path="/Dashboard" component={ Dashboard } />
                <Route path="/TicketForm" exact component={ TicketForm } />
                <Route path="/AccountRegister" exact component={ AccountRegister } />
                <Route path="/ResetPassword" exact component={ ResetPassword } />
                <Route path="/WorkTicket" exact component={ WorkTicket } /> 

               
                </BrowserRouter>
            </div>
         
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

                                {/* <div className="six wide centered column">
                                    <TicketForm />
                                </div> */}

                                {/* <div className="sixteen wide column">
                                    <Dashboard />
                                </div> */}
                                
                {/* </div>
            </div> */}
        
        </div>
   );
};
export default tracker; // this fixes error