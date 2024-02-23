import React, { useRef, useState } from 'react'
import { auth } from './firebase';

function SignUp() {
    const [signUp, setSignUp] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser => {
            console.log(authUser)
        }).catch(error => {
            alert(error.message)
        })
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(authUser => {
            console.log(authUser)
        })
    }

    return (
        <div className='signUp'>
            {
                !signUp ? (
                    <form >
                        <h1>Sign In</h1>
                        <input ref={emailRef} type="email" placeholder='Email' />
                        <input ref={passwordRef} type="password" placeholder='Password' />
                        <button onClick={signIn}>Sign In</button>

                        <h4>New to Netflix? <span onClick={() => setSignUp(!signUp)}>Create an account</span></h4>
                    </form>
                ) : (
                    <form >
                        <h1>Sign Up</h1>
                        <input type="text" placeholder='Full Name' />
                        <input ref={emailRef} type="email" placeholder='Email' />
                        <input ref={passwordRef} type="password" placeholder='Password' />
                        <button onClick={register}>Sign Up</button>

                        <h4>Already have an account? <span onClick={() => setSignUp(!signUp)}>Login</span></h4>
                    </form>
                )

            }
        </div>
    )
}

export default SignUp
