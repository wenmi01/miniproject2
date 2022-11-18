import { Helmet } from "react-helmet";
import { React } from 'react';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import logo from "../../assets/images/bixfer_logo_w.png";

function Login() {
  return (
    <div>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/31149d48b0.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Header />
      <div className="container headerSpace">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} alt="BiXfer Logo" />
              <h2>Login</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <form>
            <div className="form-group row">
              <label for="email" className="col-4 col-form-label">
                Email
              </label>
              <div className="col-8">
                <div className="input-group">
                  {/* <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fa fa-address-card"></i>
                    </div>
                  </div> */}
                  <input
                    id="email"
                    name="email"
                    placeholder="email"
                    type="text"
                    className="form-control"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label for="password" className="col-4 col-form-label">
                Password
              </label>
              <div className="col-8">
                <input
                  id="password"
                  name="password"
                  placeholder="password"
                  type="text"
                  className="form-control"
                  required="required"
                />
              </div>
            </div>
            <br />
            <div className="form-group row">
              <div className="offset-4 col-8">
                <button name="submit" type="submit" className="btn btn-success">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer className="footer" style={{ marginTop: "100px" }} />
    </div>
  );
}

export default Login;
