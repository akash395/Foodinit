import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="Container1">
            <form>
                <h3 className = "H3class">Sign In</h3>

                <div className="form-group">
                    <label>Email address</label> <br></br>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label><br></br>
                    <input type="password" className="form-control" placeholder="Enter password" />
                    
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








// import React from 'react'

// function SignIn() {
//     return (
//         <main className = "form">
//             <form type = "submit">
//                 Username <input type = "text" placeholder = "Username" />
//                 <br />
//                 <br />
//                 Password <input type = "text" placeholder = "Password" />
//             </form>
//         </main>
//     )
// }

// export default SignIn
