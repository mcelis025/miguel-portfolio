import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="container" id="contactLink">  
      <h1 className="center">contact.</h1>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="name" type="text" className="validate"></input>
              <label htmlFor="name">Name.</label>
            </div>
            <div className="input-field col s6">
              <input id="contactPhone" type="tel" className="validate"></input>
              <label htmlFor="contactPhone">Phone.</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="contactEmail" type="email" className="validate"></input>
              <label htmlFor="contactEmail">Email.</label>
              <span className="helper-text" data-error="Check Format"></span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="contactMessage" className="materialize-textarea validate"></textarea>
              <label htmlFor="contactMessage">Enter Your Message.</label>
            </div>
          </div>
          <button className="btn btn-small right waves-effect waves-light black" type="submit" name="action">Send
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Contact;
