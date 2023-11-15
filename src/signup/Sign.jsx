import React from "react";
import styles from "./sign.css"; // eslint-disable-next-line
import Signbox from "./Signbox";
import Progressbar from "./Progressbar";
import { useState } from "react";
import Mybody from "./Mybody";
import Home from "../home/Home";
import {  useNavigate } from 'react-router-dom';
import Myworry from "./Myworry";
import logoImage from "./logo.png";

function Sign(){
    const [page,setPage] = useState(1);
    const navigate = useNavigate();
    
    //next 버튼!
    const handleSignboxSubmit = () => {
        setPage(2);
    };
    const handleMybodyButtonClick = () => {
        setPage(3);
    };
    const handleLastButtonClick = () => {
        setPage(4);
    };

    //prev 버튼!
    const handleMybodyPrevClick = () => {
        setPage(1);
      };
    const handleLastPrevClick = () => {
        setPage(2);
    };
    return(
        <div>
            <img className="logoimg" src={logoImage} alt='Logo' />
            <Progressbar  num={page}/>
            <h1 className="signtitle">회원가입</h1>
            {page === 1 && <Signbox goNext={handleSignboxSubmit} />}
            {page === 2 && <Mybody  goNext={handleMybodyButtonClick} goPrev={handleMybodyPrevClick}/>}
            {page === 3 && <Myworry  goNext={handleLastButtonClick} goPrev={handleLastPrevClick}/>}
            {page === 4 &&  navigate("/home")}
        </div>
    );
}

export default Sign;