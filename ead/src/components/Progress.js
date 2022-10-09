import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css"


const Progress = () =>{
    return(<>
    <div id="progress-container">
        <h2>Your Progress</h2>
        <div className="circular-progress-container d-flex flex-column justify-content-center align-items-center">
            <div className="circular-progress d-flex justify-content-center align-items-center ">
                 <span className="progress-value ">60%</span>
            </div>
        </div>
        <h3>Keep Going!</h3>
    </div>
    </>)
}

export default Progress