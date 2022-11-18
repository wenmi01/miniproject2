import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import ContactForm from '../components/ContactForm';

import ApiService from "../services/ApiService";
const baseUrl = ApiService("baseUrl");

function Contact() {
  return (
    <div>
      <Header pagename="Contact Us" />
      <div className="container headerSpace">
        <h1>Contact Us at BiXfer</h1>
      </div>
      <ContactForm/>

      <br />
      <p className="h4 text-center">
          Ready to begin using BiXfer? <br/><br/>
          <a className="btn btn-lg btn-success text-white" href={baseUrl + "/login"}> LET'S GET STARTED NOW</a>
      </p>

      <Footer />
    </div>
  );
}

export default Contact;
