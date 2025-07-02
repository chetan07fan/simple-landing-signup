import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt className="about-img" />
        <img src={play_icon} alt className="play-icon" />
      </div>
      <div className="about-right">
        <h2>Web Development Course</h2>
        <h3>Nurituing to Tomorrow's Leaders Today</h3>

        <p>
          Web development is an essential skill in the digital world, and this
          course is designed to provide a strong foundation.structured web
          pages, including headings, paragraphs, lists, links, and imagesstrong
          foundation.structured web pages, including headings, paragraphs,
          lists, links, and images
        </p>

        <p>
          After mastering HTML, you will dive into CSS, the language
          responsible. strong foundation.structured web pages, including
          headings, paragraphs, lists, links, and images for styling web
          pages.strong foundation.structured web pages, including headings,
          paragraphs, lists, links, and images
        </p>

        <p>
          By the end of this course, you will be equipped with the knowledge and
          skills to build fully functional web pages from scratch. strong
          foundation.structured web pages, including headings, paragraphs,
          lists, links, and imagesstrong foundation.structured web pages,
          including headings, paragraphs, lists, links, and images
        </p>
      </div>
    </div>
  );
};

export default About;
