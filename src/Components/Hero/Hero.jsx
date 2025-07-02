import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero Contanier">
      <div className="hero-text">
        <h1>
          Learn and Grow with Us Unlock Key! Your Potential with Expert-Led
          Courses
        </h1>
        <p>
          Explore our industry-leading courses and take your skills to the next
          level. From Web Development to Data Science, we have everything you
          need to succeed.
        </p>
        <button className="btn">
          Explore Courses <img src={dark_arrow} alt=""></img>{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
