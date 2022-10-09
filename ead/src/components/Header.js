import React from "react";
import "../App.css"
import bg_header from "../Image/bg_header.jpeg"

const Header = () =>{


    return(
        <>
        <header className="bg-header">
        <img className="img-fluid w-100" src={bg_header} alt="background"></img>
        </header>
        </>
    )
}

export default Header