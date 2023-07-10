import React, { useEffect } from "react";
import Aos from "aos"
import 'aos/dist/aos.css'
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      
        return () => {
          Aos.refresh();
        };
      }, []);
      
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1 data-aos="zoom-in">SALES</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" data-aos="zoom-out-left"src={BannerImg} alt=""/>
            </div>
        </div>
    );
};

export default Banner;
