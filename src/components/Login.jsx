// import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    console.log(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        // console.log('google google daak pari');
        signInWithPopup(auth, provider)
            .then((result) => {
                // const user = result.user;
                // console.log(user);
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);

            })
            .catch((error) => {
                console.log('ErrorCode: ', error.code, 'ErrorMessage: ', error.message);
            })
    }

    const handleLogOut = () => {
        signOut(auth)
            .then((result) => {
                console.log(result);
                setUser(null); // Sign-out successful.
                console.log("🚀 ~ .then ~ object:", result);
            })
            .catch((error) => {
                // An error happened.
            });
    }
    return (
        <div>
            <h2>Login</h2>
            {/* user ? logout : sign in */}

            {
                user ?
                    <button onClick={handleLogOut}>Log out</button> :
                    <button onClick={handleGoogleSignIn}>Google login</button>
            }

            {user && <div className="">
                <h3>User Name: {user.displayName}</h3>
                <p>User Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;