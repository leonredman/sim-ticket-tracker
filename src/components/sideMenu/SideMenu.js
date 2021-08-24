import './SideMenu.css';
import React from 'react';

const SideMenu = () => {
    return (

        <div className="ui vertical vertical menu">
           
            <div className="item">
                <div className="header">Home</div>
                <div className="menu">
                    <a href="/" className="item">Dashboard</a>
                    <a href="/" className="item">Option 2</a>
                    <a href="/" className="item">Option 3</a>
                </div>
            </div>
            <div className="item">
                <div className="header">Tickets</div>
                <div className="menu">
                <a href="/" className="item">Option 1</a>
                <a href="/" className="item">Option 2</a>
                <a href="/" className="item">Option 3</a>
                </div>
            </div>
            <div className="item">
                <div className="header">Projects</div>
                <div className="menu">
                <a href="/" className="item">Option 1</a>
                <a href="/" className="item">Option 2</a>
                <a href="/" className="item">Option 3</a>
                </div>
            </div>
            <div className="item">
                <div className="header">User Roles</div>
                <div className="menu">
                <a href="/" className="item">Option 1</a>
                <a href="/" className="item">Option 2</a>
                <a href="/" className="item">Option 3</a>
                </div>      
            </div>

            <div className="item">
                <div className="header">Reports</div>
                <div className="menu">
                <a href="/" className="item">Option 1</a>
                <a href="/" className="item">Option 2</a>
                <a href="/" className="item">Option 3</a>
                </div>
                
            </div>
        </div>
    );
};

export default SideMenu;