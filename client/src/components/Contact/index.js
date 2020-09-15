import React from "react";

function Contact() {
  return (
    <div>  
      <h1 className="center">contact.</h1>
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input id="name" type="text" className="validate"></input>
            <label for="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input id="contactPhone" type="tel" className="validate"></input>
            <label for="contactPhone">Phone</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="contactEmail" type="email" className="validate"></input>
            <label for="contactEmail">Email</label>
            <span className="helper-text" data-error="Check Format"></span>
          </div>
        </div>
        <div className="row">
        <div class="input-field col s12">
          <textarea id="contactMessage" className="materialize-textarea"></textarea>
          <label for="contactMessage">Enter Your Message.</label>
        </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Contact;
