import React from 'react';

const LogButton = (props) => {
    return (
        <div>
        <button className="ui button" style={{margin: '6px'}}>{ props.text }</button>
        </div>
    )
}

export default LogButton;