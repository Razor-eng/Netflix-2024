import React from 'react'
import Home from './Home';
import Login from './Login';

const Page = ({ user }) => {
    return (
        <div>
            {
                !user ?
                    <Login />
                    :
                    <Home />
            }
        </div>
    )
}

export default Page