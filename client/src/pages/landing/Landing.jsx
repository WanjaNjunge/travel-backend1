import React from "react";
//import Header from "../../components/header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Destination from "../destination/Destination";
import TravelExperience from "../travelexperience/TravelExperience";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function Landing() {
  
  return (
    <div>
      <Header />
      <Home />
      <Destination />
      <TravelExperience />
      <About />
      <Footer />
    </div>
    );
    }
    export default Landing;