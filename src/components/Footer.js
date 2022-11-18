import 'bootstrap/dist/css/bootstrap.min.css';

import { Helmet } from 'react-helmet';

import '../App.css';

function Footer() {
    return(
        <div>
            <Helmet>
            <script src="https://kit.fontawesome.com/31149d48b0.js" crossorigin="anonymous"></script>
            </Helmet>
            <footer className="footer">
            <div className="container center">

                <div className="row my-5">
                    <div className="col">
                        <footer className="text-center text-lg-start" style={{backgroundColor: '#145A32'}}>
                          <div className="container d-flex justify-content-center py-5">
                            <a type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{backgroundColor: '#54456b'}} href="https://www.facebook.com/bixfer" target="blank">
                              <i className="fab fa-facebook-f" aria-hidden="true"></i>
                            </a>
                          </div>
                    
                          <div className="text-center text-white p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                            © 2022 Copyright: &nbsp;
                            <a className="text-white" href="#">BiXfer: Rowen Remis R. Iral & Normita Burce</a>
                          </div>

                        </footer>
                    </div>
                </div>

            </div>
        </footer>
        </div>
    );
};

export default Footer;