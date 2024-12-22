import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mx-auto w-11/12">
      <div className="carousel w-full h-[580px]">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/S0GfhPM/8.jpg"
            className="w-full h-[300px] sm:-[420px] md:h-[520] lg:h-[700px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/QY6VsgV/7.jpg"
            className="w-full h-[300px] sm:-[420px] md:h-[520] lg:h-[700px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/kGs3PSK/5.jpg"
            className="w-full h-[300px] sm:-[420px] md:h-[520] lg:h-[700px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/T1d7xBp/10.jpg"
            className="w-full h-[300px] sm:-[420px] md:h-[520] lg:h-[700px]"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;