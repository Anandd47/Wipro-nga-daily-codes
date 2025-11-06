//here we will add sample code for welcome component


//step 1 : Importing react from 'react' ;
//step 2 : creating a function that returns JSX
//step 3 : importing this component and using it in app.js
//step 4 : running and building

import React from "react";

function welcome(props) {
    return (
        <div>
            <h2> Hello, {props.name}!</h2>
            <p> Welcome to our first component </p>
        </div>
    
    )
} //closing function

export default welcome;