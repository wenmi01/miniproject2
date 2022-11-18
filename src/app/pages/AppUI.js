import { React, useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import ApiService from "../../services/ApiService";
const apiPath = ApiService("apiPath");

// let first_name = "Jan";
// let last_name = "Tapos";
// let receiver_first_name = "Avril";
// let receiver_last_name = "Delayna";

let first_name = "";
let last_name = "";
let receiver_first_name = "";
let receiver_last_name = "";

function AppUI() {
  const [docs, setDocs] = useState([]);
  const [formFields, setFormFields] = useState([]);

  useEffect(() => {
    getDocsList();
  }, []);

  const getDocsList = () => {
    fetch(apiPath + "/docs")
      .then((response) => response.json())
      .then((data) => {
        setDocs(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // CRUD -- api in-memory only (change to use mongodb or mysql in the future)
  const onClickUpdate = (event, item) => {
    fetch(apiPath + "/docs/" + item.id)
      .then((response) => response.json())
      .then((data) => {
        setFormFields(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //handle change
  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormFields((values) => ({ ...values, [fieldName]: fieldValue }));
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();

    let id = formFields.id;
    let method = id > 0 ? "PUT" : "POST";

    fetch(apiPath + "/docs/" + id, {
      method: method,
      body: JSON.stringify(formFields),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormFields(data);
        getDocsList();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const addHandler = (event) => {
    setFormFields({
      id: 0,
      first_name: "",
      last_name: "",
      receiver_first_name: "",
      receiver_last_name: "",
      transition_text: "",
    });
  };

  const onClickDelete = (event, item) => {
    fetch(apiPath + "/docs/" + item.id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        getDocsList();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Header />
      <div className="container-fluid headerSpace">
        <div className="row">
          <div className="col-md-12">
            <h3>Transitions</h3>
            <p>Hello,</p>

            <div>Please see your transitions below.</div>

            <div>Regards,</div>
            <div>BiXfer Team</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1>List of Transitions</h1>
            <p>
              This lists your transitions. It is best to keep them in this app
              and work your way to making sure they are transferred.
            </p>
            <p>Update text editor to WYSIWYG. bootstrap-wysiwyg</p>
            {/* <p>
              <a className="btn" href="#">
                View details »
              </a>
            </p> */}
          </div>
        </div>

        <button
          className="btn btn-primary m-2"
          onClick={(event) => addHandler(event)}
        >
          Add New Record
        </button>

        <form onSubmit={onHandleSubmit}>
          <input type="hidden" value="{formFields.id}" />
          <input
            type="text"
            name="first_name"
            value={formFields.first_name}
            placeholder="First Name"
            onChange={handleChange}
            className="m-1"
          />
          <input
            type="text"
            name="last_name"
            value={formFields.last_name}
            placeholder="Last Name"
            onChange={handleChange}
            className="m-1"
          />
          <input
            type="text"
            name="receiver_first_name"
            value={formFields.receiver_first_name}
            placeholder="Receiver's First Name"
            onChange={handleChange}
            className="m-1"
          />
          <input
            type="text"
            name="receiver_last_name"
            value={formFields.receiver_last_name}
            placeholder="Receiver's Last Name"
            onChange={handleChange}
            className="m-1"
          />
          <br />
          <textarea
            name="transition_text"
            value={formFields.transition_text}
            placeholder="Transition Text change with WYSIWYG"
            rows="4"
            cols="100"
            maxLength="200"
            onChange={handleChange}
            className="m-3"
          ></textarea>

          <div>
            <input type="Submit" />
          </div>
        </form>

        {docs.map((item) => {
          return (
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <h5 className="card-header">Transition ID: {item.id}</h5>
                  <div className="card-body">
                    <p className="card-text">
                      <b>Source:</b>{" "}
                      <em>
                        {item.first_name}{" "}{item.last_name}
                      </em>
                    </p>
                    <p classname="card-text">
                      <b>Receiver</b>{" "}
                      <em>
                        {item.receiver_first_name}{" "}{item.receiver_last_name}
                      </em>
                    </p>
                    <p className="card-text">
                      <b>Transition details:</b> <em>{item.transition_text}</em>{" "}
                    </p>
                  </div>
                  <div className="card-footer">
                    Actions:{" "}
                    <button
                      className="btn btn-primary"
                      onClick={(event) => onClickUpdate(event, item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(event) => onClickDelete(event, item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}


      </div>
      <Footer />
    </div>
  );
}

export default AppUI;
