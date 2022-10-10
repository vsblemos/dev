import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css"

const Sidebar = () =>{
    return(
    <>
    <div className="col-12 d-flex flex-column p-3 nav-container">
    <div className="logo-container d-flex justify-content-center">
    <i className="logo bi bi-heart-pulse text-center"></i>
    </div>
    <ul className="nav flex-column mb-3 main-menu">
      <li className="nav-item d-flex align-items-center">
        <i className="icon bi bi-motherboard"></i>
          <h3 className="inner-text">Dashboard</h3>
      </li>
       <li className="nav-item d-flex align-items-center">
        <i className="icon bi bi-motherboard"></i>
          <h3 className="inner-text">Course</h3>
      </li>
       <li className="nav-item d-flex align-items-center">
        <i className="icon bi bi-motherboard"></i>
          <h3 className="inner-text">Schedule</h3>
      </li>
       <li className="nav-item d-flex align-items-center">
        <i className="icon bi bi-motherboard"></i>
          <h3 className="inner-text">Resources</h3>
      </li>
       
    </ul>
    <ul className="nav flex-column secondary-menu">
       <li className="nav-item d-flex align-items-center">
        <i className="icon bi bi-box-arrow-in-right"></i>
          <h3 className="inner-text">Logout</h3>
      </li>
       <li className="nav-item d-flex align-items-center">
        <i className="icon bi bi-gear"></i>
          <h3 className="inner-text">Settings</h3>
      </li>
    </ul>

    </div>
    </>
    );
    }


export default Sidebar