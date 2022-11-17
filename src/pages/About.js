import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import ApiService from "../services/ApiService";
const baseUrl = ApiService("baseUrl");

function About() {
  return (
    <div>
      <Header pagename="About Us" />
      <div className="container headerSpace">
        <h1>About BiXfer</h1>
        <p>
          BiXfer is short for Business Transfer App.  We focus on creating on a solution to help you document your business as you go along. Especially for a key person in your organization.
        </p>
        <p>
          Created to serve the purpose of transitioning, keeping of documents of the businesssess and serving it to be received by the next in line.
        </p>
        <p className="text-center">
          <a className="btn btn-lg btn-success text-white" href={baseUrl + "/login"}>GET STARTED NOW</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
