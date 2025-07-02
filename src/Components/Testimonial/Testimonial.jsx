import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const testimonials = [
  {
    img: user_1,
    name: "William Jackson",
    company: "Edusity, USA",
    text: "A course is a structured program of study designed to provide knowledge and skills on a specific subject.",
  },
  {
    img: user_2,
    name: "Sophia Martinez",
    company: "TechPro, Canada",
    text: "Courses can be offered in various formats, including online, in-person, or hybrid learning.",
  },
  {
    img: user_3,
    name: "Liam Anderson",
    company: "SkillSet, UK",
    text: "Educational courses are designed to enhance expertise and improve career opportunities.",
  },
  {
    img: user_4,
    name: "Emma Roberts",
    company: "BrightFuture, Australia",
    text: "Learning new skills through structured courses can boost professional and personal growth.",
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  const scrollNext = () => {
    if (sliderRef.current) {
      let slideWidth = sliderRef.current.querySelector(".slide").offsetWidth;
      sliderRef.current.scrollBy({ left: slideWidth * 2, behavior: "smooth" });
    }
  };

  const scrollBack = () => {
    if (sliderRef.current) {
      let slideWidth = sliderRef.current.querySelector(".slide").offsetWidth;
      sliderRef.current.scrollBy({ left: -slideWidth * 2, behavior: "smooth" });
    }
  };

  return (
    <div className="testimonials">
      <button className="nav-btn back-btn" onClick={scrollBack}>
        <img src={back_icon} alt="Back" />
      </button>
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          <ul>
            {testimonials.map((testimonial, index) => (
              <li key={index} className="slide">
                <div className="user-info">
                  <img src={testimonial.img} alt={`user-${index + 1}`} />
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.company}</span>
                </div>
                <p>{testimonial.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="nav-btn next-btn" onClick={scrollNext}>
        <img src={next_icon} alt="Next" />
      </button>
    </div>
  );
};

export default Testimonial;
