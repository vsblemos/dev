import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Course from "./components/Course";


const App = () =>{
  return(
    <>
    <div>
    <Header className="container-fluid"></Header>
    </div>
    <div className="container">
    <div className="row">
      <div className="col-2" id="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div className="col-7 text-center" id="course">
        <h1>Welcome Back, Victor</h1>
        <div className="col-8">
        <Course></Course>
        </div>
        

      </div>
      <div className="col-3" id="ranking">
        <h1>teste 3</h1>
      </div>

    </div>
    </div>
   
  

    
   
    </>
  )
}

export default App;
