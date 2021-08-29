import React from "react";
import LogButton from "../logButton/LogButton";

const DemoLogin = () => {
  return (
    <div className="demoLogContainer">
      <div
        className="DemoLoginContainer"
        style={{ marginTop: "5px", display: "flex", flexDirection: "column" }}
      >
        <h2>Demo Log In</h2>

        <LogButton text="Admins. Login" />
        <LogButton text="Manager Login" />
        <LogButton text="Developer Login" />
        <LogButton text="QA-Agent Login" />

        <p>
          All newly registered users are assigned the role of Submitter. You can
          demo other roles for this application without registering.
        </p>
      </div>
    </div>
  );
};

export default DemoLogin;
