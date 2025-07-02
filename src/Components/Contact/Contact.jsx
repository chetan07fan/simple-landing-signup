import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import SignInForm from "../Form/SignInForm";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-col">
        <h3>
          Send us a message{" "}
          <img src={msg_icon} alt="message-icon" className="msg-icon" />
        </h3>
        <p>
          Courses may range from short-term workshops to full-degree programs
          and typically include lectures, assignments, assessments, and
          practical exercises. They are commonly found in educational
          institutions, training centers, and online platforms, catering to
          learners of all levels, from beginners to advanced professionals.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail-icon" className="icon" />
            contactcol123@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="phone-icon" className="icon" />
            91-123-322112334
          </li>
          <li>
            <img src={location_icon} alt="location-icon" className="icon" />
            Moti nagar at post garm and sector Maala NO:10 sector block:98.
          </li>
        </ul>
      </div>
      <SignInForm />
    </div>
  );
};

export default Contact;
