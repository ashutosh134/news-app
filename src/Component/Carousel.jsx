import React from 'react'
import BannerOne from '../assets/banner_1.jpg';
import BannerTwo from '../assets/banner_2.jpg';
import BannerThree from '../assets/banner_3.jpg';




const Carousal = () => {
  return (
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={BannerThree} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={BannerTwo} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={BannerOne} className="d-block w-100" alt="..."/>
      </div>
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carousal