import React, { Component } from "react";


export default class SignUp extends Component {
    render() {
        return (
            <div className="Container2">
            <form>
                <h3 className="H3class">Sign Up</h3>

                <div className="form-group">
                    <label>First name</label><br></br>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label><br></br>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label><br></br>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label><br></br>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br></br><br></br>
                <button type="submit" className="SignUpBtn">Sign Up</button><br></br><br></br>
                <p className="forgot-password text-right">
                Already registered?   <a href="http://localhost:3000/signin"> sign in</a>
                </p>
            </form>
            </div>
        );
    }
}



