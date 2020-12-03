import React, { Component } from "react";

export default class Login extends Component {
    constructor (){
        super ();
        this.state = {
            clickedSubmit: 0,
        }
    }
    render() {
        return (
            <div className="Container1">
            <form action = 'http://localhost:5000/signin' method = 'post'>
                <h3 className = "H3class">Sign In</h3>

                <div className="form-group">
                    <label>Email address</label> <br></br>
                    <input type="email" className="form-control" placeholder="Enter email" name = "email" />
                </div>

                <div className="form-group">
                    <label>Password</label><br></br>
                    <input type="password" className="form-control" placeholder="Enter password" name = "password" />
                    
                </div>
                <br></br>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label><br></br><br></br>
                    </div>
                </div>

                <button type="submit" className="SubmitBtn">Submit</button>
                <p className="forgot-password"><br></br>
                     <a href="#" >Forgot password?</a>
                </p>
            </form>
            </div>
        );
    }
}








