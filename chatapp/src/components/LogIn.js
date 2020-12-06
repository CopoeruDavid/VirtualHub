import React from 'react';
import '../App.css';
import './Login.css';
import axios from "axios";
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

export class Login extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
  
    // render() {
    //   return (
    //     <div className = "container">
    //       <div className = "row">
    //          <div className = "card col-md-6 offset-md-3">
    //             <h3 className = "text-center">Log-in Page</h3>
    //                 <div className = "card-body">
    //                   <form>
    //                    <div className = "form-group">
    //                      <label>Username</label>
    //                      <input placeholder = "Username" name = "username" className = "form-control"/>
    //                     </div>
    //                 <div className = "form-group">
    //                                         <label>Password</label>
    //                                         <input placeholder = "Password" name = "password" className = "form-control"/>
    //                 </div>

    //                 <button className = "btn btn-success" >Log In</button>
    //                 </form>
    //            </div>          
    //           </div>
    //       </div>
    //     </div>
    //   );
    // }

    constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        password: "",
      };
    }

    submitHandler = async (e) => {
      e.preventDefault();
      console.log(this.state);
      await axios
        .post("http://localhost:5001/users/login", this.state)
        .then((res) => {
          localStorage.setItem("auth_token", res.data);
          console.log(localStorage.getItem("auth_token"));
          console.log(localStorage);
          if(res.data){
              alert("User logged in!");
          }else{
              alert("Wrong credentials");
          }       
          
        })
        
        .catch((error) => {
          console.error();
        });
      axios
        .post("http://localhost:5001/users/getUser", localStorage)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("user_f_name", res.data.f_name);
          localStorage.setItem("user_l_name", res.data.l_name);
          console.log(localStorage);
          alert("Hello " + localStorage.getItem("user_f_name"));
          this.props.history.push('/')
          window.location.reload(false);
        })
        .catch((error) => {
          console.error();
        });
        
    };

    changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    
      render() {
        const { username, password } = this.state;
    
        return (
          <div className="wrapper">
            <div className="form-wrapper">
              <h1>LOG IN</h1>
              <form onSubmit={this.submitHandler} noValidate>
                <div className="username">
                  <input
                    
                    placeholder="Username"
                    type="username"
                    name="username"
                    value={username}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="password">
                  <input
                    
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="createAccount">
                  <button type="submit">LOG IN</button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    
}
  export default Login;