import React from 'react'

function SignUp() {

    return (

        <div className="Container2">
            <form action = 'http://localhost:5000/signup' method = 'post'>
                <h3 className="H3class">Sign Up</h3>

                <div className="form-group">
                    <label>First name</label><br></br>
                    <input type="text" className="form-control" placeholder="First name" name = 'fname' />
                </div>

                <div className="form-group">
                    <label>Last name</label><br></br>
                    <input type="text" className="form-control" placeholder="Last name"  name= 'lname'/>
                </div>

                <div className="form-group">
                    <label>Email address</label><br></br>
                    <input type="email" className="form-control" placeholder="Enter email" name = 'email'/>
                </div>

                <div className="form-group">
                    <label>Password</label><br></br>
                    <input type="password" className="form-control" placeholder="Enter password" name = 'password'/>
                </div>
                <br></br><br></br>
                <button type="submit" className="SignUpBtn">Sign Up</button><br></br><br></br>
                <p className="forgot-password text-right">
                Already registered?   <a href="http://localhost:3000/signin"> sign in</a>
                </p>
                
            </form>
        </div>
    )
}

export default SignUp




