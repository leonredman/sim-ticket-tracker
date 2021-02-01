import React from'react';

const DemoLogin = () => {
    return (

        <div className="DemoLoginContainer" style={{marginTop: '60px', display: 'flex', flexDirection: 'column'}}>
            <h1>Demo Log In</h1>

        <button class="ui button" style={{margin: '6px'}}>Admin Login</button>
        <button class="ui button" style={{margin: '6px'}}>Manager Login</button>
        <button class="ui button" style={{margin: '6px'}}>Developer Login</button>
        <button class="ui button" style={{margin: '6px'}}>Submitter Login</button>

        <p>All newly registered users are assigned 
        the role of Submitter. You can demo other roles for 
        this application without registering.</p>
        </div>
    );
};

export default DemoLogin;