import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css"
import user from "../Image/user.jpeg"

const Ranking = () =>{
    return(<>
    <div id="ranking-container">
        <div className="users-avatar ranking-top d-flex flex-wrap">
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
        </div>
        <div className="user-container d-flex flex-column justify-content-center align-items-center">
            <span className="user-avatar"><img src={user} alt="user" className="img-fluid w-100"></img></span>
            <h3 className="title text-center text-wrap">You are the 2nd in you class</h3>
        </div>
        <div className="users-avatar ranking-down d-flex flex-wrap">
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
            <span className="avatar"></span>
        </div>
    </div>
    </>)
}

export default Ranking