import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbars/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/about";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import DynamicForm from "./Components/Form/DynamicForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Title subTitle="Your Program" title="What we Offer" />
              <div className="Container">
                <Programs />
              </div>
              <About />
              <Title subTitle="Gallery" title="Campus Photo" />
              <Campus />
              <Title subTitle="Testimonial" title="What Student Says" />
              <Testimonial />
              <Title subTitle="Contact Us" title="Get In Touch" />
              <Contact />
              {/* ✅ Sign In Button using Link */}
              <div style={{ textAlign: "center", margin: "20px" }}>
                <Link to="/dynamicform">
                  <button>Sign In</button>
                </Link>
              </div>
            </>
          }
        />
        <Route path="/dynamicform" element={<DynamicForm />} />
      </Routes>
    </Router>
  );
};

export default App;
