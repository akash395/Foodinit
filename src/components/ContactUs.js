import React, { Component } from "react";

export default class ContactUs extends Component {
    constructor (){
        super ();
        this.state = {
            clickedSubmit: 0,
        }
    }
    render() {
        return (
            <div className="Container1">
            <form action = 'http://localhost:5000/contactus' method = 'post'>
                <h3 className = "H3class">Contact Us</h3>

                <div className="form-group">
                    <label>Full Name</label> 
                    <input type="text" className="form-control" placeholder="Enter Full Name" name = "full name" />
                </div>
                <br></br>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" name = "email" />
                    
                </div>
                <br></br>
                <div className="form-group">
                <div className="form-group">
                    <label>Message</label> 
                    <input type="text" className="form-control" placeholder="Type your message" name = "message" />
                </div>
                </div>
                <br></br>
                <br></br>
                <button type="submit" className="SubmitBtn">Submit</button>
                <br></br>
                <br></br>
            </form>
            </div>
        );
    }
}
