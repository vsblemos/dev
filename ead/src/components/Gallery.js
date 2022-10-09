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
        <div className="gallery-container d-flex justify-content-center">
        <Slider {...settings} className="col-11 gallery-slider">
            {data.map((item)=>(
               <div key={item} className="miniature">
                <img src={item.img}></img>

               </div> 
            ))}
        </Slider>
        </div>
    )}
        

export default Gallery

