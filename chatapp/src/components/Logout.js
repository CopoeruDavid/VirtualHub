import React, { Component } from "react";
// import axios from "axios";
// import Form from "react-bootstrap/Form";
import { Redirect } from "react-router-dom";

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }    
    }

    render(){
        localStorage.clear();
        this.props.history.push('/')
        window.location.reload(false);
        return(null);
        
    }
   
}
export default Logout;