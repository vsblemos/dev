import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css"


const Progress = () =>{
    return(<>
    <div id="progress-container">
        <h2 className="secondary-title text-center">Your Progress</h2>
        <div className="circular-progress-container d-flex flex-column justify-content-center align-items-center">
            <div className="circular-progress d-flex justify-content-center align-items-center">
                 <span className="progress-value secondary-title">60%</span>
            </div>
        </div>
        <h3 className="text-center title">Keep Going!You`re gonna get there!</h3>
    </div>
    </>)
}

export default Progress