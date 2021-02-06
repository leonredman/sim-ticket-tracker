import React from 'react';

const SideMenu = () => {
    return (
        <div className="ui vertical pointing menu">
                <a href className="teal item active">
                    Simple Issue Manager
                    <br /> 
                    Ticket System
                    
                </a>
                <a href className="item">
                    Tickets
                   
                </a>
                <a href className="item">
                    Projects
                 
                </a>
                <a href className="item">
                    User Roles
                    
                </a>
                <a href className="item">
                    Reports
                   
                </a>
                
                    
        </div>

    );
};

export default SideMenu;