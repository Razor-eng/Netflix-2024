import React, { useState } from 'react'
import './css/Login.css'
import SignUp from './SignUp'

function Login() {
    const [signIn, setSignIn] = useState(false)
    const showSignUp = (e) => {
        e.preventDefault();
        setSignIn(true);
    }

    return (
        <div className='login'>
            <div className="login_header">
                <img className='login_logo' src="/logo.png" alt="" />
                <button className="login_button" onClick={showSignUp}>
                    Sign In
                </button>
            </div>

            <div className="login_body">
                {
                    signIn ? (
                        <SignUp />
                    ) : (
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch Anywhere, Cancel at any time.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                            <form className="login_form">
                                <input type="text" placeholder='Email Address' />
                                <button onClick={showSignUp}>Get Started</button>
                            </form>
                        </>
                    )
                }
            </div>
            <div className="login_gradient"></div>
        </div >
    )
}

export default Login
