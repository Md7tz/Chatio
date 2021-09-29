import React from 'react'
import { GoogleOutlined, FacebookOutlined, GithubOutlined } from '@ant-design/icons';
import "firebase/app";

import firebase from 'firebase/app'; 
import { auth } from '../firebase';


const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to ChatIO!</h2>
        <div
          className="login-button google"
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br /><br />
        {/* Todo: Fix authentication for github and facebook */}
        {/* <div
          className="login-button github"
          onClick={() => auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())}
        >
          <GithubOutlined /> Sign In with Github
        </div> */}
        {/* <div
          className="login-button facebook"
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
        >
          <FacebookOutlined /> Sign In with Facebook   
        </div> */}
      </div>
    </div>
  );
}

export default Login
