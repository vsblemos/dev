import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css"

const Sidebar = () =>{
    return(
    <>
    <div className="col-12 d-flex flex-column p-3 text-bg-dark sidebar">
    <div href="/" className="d-flex  text-decoration-none text-center">
    <i className="bi bi-heart-pulse text-center"></i>
    </div>
    <ul className="nav flex-column mt-3 mb-3">
      <li className="nav-item">
          <i className="bi pe-none me-2"></i>
          <h3>Home</h3>
      </li>
      <li className="nav-item">
          <i className="bi pe-none me-2"></i>
          <h3>Home</h3>
      </li>
      <li className="nav-item">
          <i className="bi pe-none me-2"></i>
          <h3>Home</h3>
      </li>
      <li className="nav-item">
          <i className="bi pe-none me-2"></i>
          <h3>Home</h3>
      </li>
      <li className="nav-item">
          <i className="bi pe-none me-2"></i>
          <h3>Home</h3>
      </li>
    </ul>
    <ul className="nav flex-column mt-3 mb-3">
      <li className="nav-item">
          <i className="bi pe-none me-2"></i>
          <h3>Home</h3>
      </li>
      <li className="nav-item">
          <i className="bi pe-none me-2"></i>
          <h3>Home</h3>
      </li>
    </ul>

    </div>
    </>
    );
    }


export default Sidebar