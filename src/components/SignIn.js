import React from 'react'

function SignIn() {
    return (
        <main className = "form">
            <form type = "submit">
                Username <input type = "text" placeholder = "Username" />
                <br />
                <br />
                Password <input type = "text" placeholder = "Password" />
            </form>
        </main>
    )
}

export default SignIn
