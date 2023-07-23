import React, { useState } from "react";

function Contact() {
  return (
    <div className="contentContainer">
      <h2 className="contentTitle">Contact Form</h2>
      <hr style={{ margin: "5px 0 20px 0" }} />
      <div className="aboutContainer">
        <div className="aboutImageContainer"></div>
        <div className="aboutTextContainer">
          <form id="contact-form">
            <div>
              <div className="">
                <label htmlFor="name">Name:</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                />
              </div>
              <div className="">
                <label htmlFor="email">Email Address:</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                />
              </div>
              <div className=""></div>
              <label htmlFor="message">Message:</label>
              <textarea className="form-control" name="message" />
            </div>

            <div className="">
              <button
                data-testid="button"
                className="btn btn-outline-dark "
                type="submit"
                onSubmit
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
