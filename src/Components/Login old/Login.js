import React, { useState, useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Login.css';
import {useHistory} from "react-router-dom"

function Login() {
  const { firebase } = useContext(FirebaseContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push("/")
      alert("Logged In")
    }).catch((error)=>{
      alert(error)
      console.log(error)
    })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            placeholder="Enter email address"
            onChange={(e) => { setEmail(e.target.value) }}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            placeholder="Enter password"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <p onClick={()=>{
          history.push("/signup")
        }}>Signup</p>
      </div>
    </div>
  );
}

export default Login;
