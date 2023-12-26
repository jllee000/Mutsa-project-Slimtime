import React from "react";
import styles from "./login.css";
import logoImage from "./logo.png";
import Loginbox from "./Loginbox";
function Login() {
    return (
        <div>
            <img className="logoimg" src={logoImage} alt='Logo' />
            <Loginbox />
        </div>
    );
}

export default Login;

