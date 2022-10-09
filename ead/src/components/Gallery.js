import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { data } from "../data/data";

const Gallery = () =>{
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
    return(
        <Slider {...settings} className="col-10 d-flex align-content-center gallery-slider">
            {data.map((item)=>(
               <div key={item} className="miniature">
                <img src={item.img}></img>

               </div> 
            ))}
        </Slider>
    )}
        

export default Gallery

