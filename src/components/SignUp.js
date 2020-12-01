import React from 'react'

export default function SignUp() {
    return (
        <main className = "form">
            <form type = "submit" style = {{fontSize: '50px', textAlign: 'center'}}>
                <br />
                <input type = "text" placeholder = "First Name"/>
                <br />
                <br />
                <input type = "text" placeholder = "Last Name" />
                <br />
                <br />
                <input type = "text" placeholder ="Email" />
                <br />
                <br />
                <input type = "password" placeholder = "Password" />
                <br />
                <br />
                <input type = "password" placeholder = "Confirm Password" />
                <hr />
                <button>Submit</button>

            </form>
        </main>
    )
}
