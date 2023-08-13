import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Login.css"

function Signin() {
    const history = useHistory();
    return (
        <div className='signinContainer' >
            <div className="click"
                onClick={() => {
                    history.push("/");
                }}
            ></div>
            <div className='mainDiv'>
                <div className="banner">
                    <div className="close" onClick={() => {
                        history.push("/")
                    }}><div></div></div>
                    <div className="contents">
                        <img src="../../Images/loginEntryPointChat.webp" alt="" />
                    </div>
                    <div className="contents">
                        <img src="../../Images/loginEntryPointFavorite.webp" alt="" />
                    </div>
                    <div className="contents">
                        <img src="../../Images/loginEntryPointPost.webp" alt="" />
                    </div>
                </div>
                <div className="buttons">
                    <input type="button" value="Continue with Google" />
                    <input type="button" value="Continue with Phone" />
                    <span>OR</span>
                    <span>Login with Email</span>
                </div>
                <div className="footer">
                    <p>All your personal details are safe with us.
                    </p>
                    <span>
                        If you continue, you are accepting OLX Terms and <br /> Conditions and Privacy Policy
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Signin
