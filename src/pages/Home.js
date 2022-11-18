import Header from "../components/Header";
import Footer from "../components/Footer";

import { React } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import "../App.css";

import ApiService from "../services/ApiService";
const baseUrl = ApiService("baseUrl");


function Home() {
  return (
    <div>
      <div className="container">
        <Header pagename="Home" />

        <div className="headerSpace">
          <div className="container mt-3">
            <div className="jumbotron">
              <div className="m5-4 p-5 bg-success text-white rounded">
                <h1>BiXfer App</h1>
                <p className="h4" style={{textAlign:"center",}}>Your business transition app.</p>
                <p className="h4" style={{textAlign:"center",}}>You transition... We make it easy for you.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="subhead" style={{textAlign:"center",}}>
        <span className="first-letter">I</span>n your business life, there come's a time your <strong>CEO</strong> will step down, 
          a <strong>great manager</strong> have to leave for taking care of his/her parents.  Now 
          comes a time, you as a business owner, needs help.{" "}
        </p>

        <img src="" alt=""/>

        <br/>

        <h2>You are losing a valuable resource due to:</h2>
        <br/>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><div className="h3">Inevitable Resignations</div></Accordion.Header>
            <Accordion.Body>
            <p>They said you <strong>can&#39;t own</strong> your <em>employees</em>.&nbsp; Here, if it is employee&#39;s will, <u>they have the right to leave</u>.&nbsp; The <strong>problem</strong> with that is you<strong> lose valuable knowledge</strong> that these employees know about a <strong>business process</strong>, a client or a <strong>trade secret</strong>.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><div className="h3">Natural Diseases and Aging</div></Accordion.Header>
            <Accordion.Body>
            <p><strong>People come and go.</strong>&nbsp; We all have our <strong>effective years and then we retire</strong>.&nbsp; Age, health and concerns that make people unable to work like <strong>disability</strong>.&nbsp; <strong>Plannning ahead</strong> and <strong>keeping their know-how</strong> in a knowledge based system is good.&nbsp; But we at <strong>BiXfer sees the opportunity</strong> to save that process in a concise and easy to navigate way.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><div className="h3">Termination</div></Accordion.Header>
            <Accordion.Body>
            <p>Even you are a<strong> people-first company</strong>, there are times that <strong>you need to terminate</strong> an employee due to <strong>grave misconduct</strong>, that could <strong>affect </strong>your business and bottomline.&nbsp; If that person knows much of your business, you will be at a hard decision, but laws and other agencies might be forcing you to do so.&nbsp; So you still need the BiXfer to have that document kept.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <br />
        <p>
          Will you wait for the inevitable to happen? Before you act and start documenting your business?
        </p>
        
        <br />
        <div className="h4">
          Ready to begin using BiXfer? <br /><br />
          <a className="btn btn-lg btn-success text-white" href={baseUrl + "/login"}> LET'S GET STARTED NOW</a>
        </div>

        <br />
        <div>
          <div className="h2">What are you waiting for?</div>
          <br/>
          <div className="h3"><a className="btn btn-lg btn-success text-white" href={baseUrl + "/contact"}>CONTACT BiXfer NOW for Inquiries!</a></div>
        </div>
        <Footer className="headerSpace" />
      </div>
    </div>
  );
}

export default Home;
