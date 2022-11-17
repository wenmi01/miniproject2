import { Helmet } from "react-helmet";

function Login() {
  return (
    <div>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/31149d48b0.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <form>
        <div className="form-group row">
          <label for="email" className="col-4 col-form-label">
            Email
          </label>
          <div className="col-8">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fa fa-address-card"></i>
                </div>
              </div>
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
        <div className="form-group row">
          <div className="offset-4 col-8">
            <button name="submit" type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
