import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import LoginForm from './components/LoginForm';
//import DemoLogin from './components/DemoLogin';
//import SideMenu from "./components/sideMenu/SideMenu";
//import MainLogin from "./components/mainLogin/MainLogin";
import Header from "./components/header/Header";
import AccountRegister from "./pages/accountRegister/AccountRegister";
import TicketForm from "./pages/ticketForm/TicketForm";
import Dashboard from "./pages/adminDashboard/Dashboard";
import LoginPage from "./pages/loginPage/loginPage";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import WorkTicket from "./pages/workTicket/WorkTicket";
import UpdateForm from "./pages/updateForm/UpdateForm";
import DevDashboard from "./pages/DevDashboard/DevDashboard";
import QaDashboard from "./pages/QaDashboard/QaDashboard";
import Ws1Dashboard from "./pages/Ws1Dashboard/Ws1Dashboard";
import homePage from "./pages/homePage/homePage";

const tracker = () => {
  // use switch and create routes to handle url params
  return (
    <div>
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <homePage />
            </Route>
            <Route path="/loginPage" exact>
              <LoginPage />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/tickets/:id">
              <TicketForm />
            </Route>
            <Route path="/accountRegister">
              <AccountRegister />
            </Route>
            <Route path="/resetPassword">
              <ResetPassword />
            </Route>
            <Route path="/workTicket/:id">
              <WorkTicket />
            </Route>
            <Route path="/updateForm/:id">
              <UpdateForm />
            </Route>
            <Route path="/devDashboard">
              <DevDashboard />
            </Route>
            <Route path="/qaDashboard">
              <QaDashboard />
            </Route>
            <Route path="/ws1Dashboard">
              <Ws1Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default tracker;
