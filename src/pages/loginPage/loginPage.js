import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import DemoLogin from "../../components/demoLogin/DemoLogin";
import "../../components/mainLogin/MainLoginStyles.css";

const LoginPage = () => {
  return (
    <div className="ui-container-login" id="loginBackgroundImg">
      <div className="ui grid">
        <div className="ui-container-login">
          <div className="row">
            <div className="four wide centered columm">
              <LoginForm />
              <DemoLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
