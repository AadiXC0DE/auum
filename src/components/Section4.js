import React from "react";
import "./Section4.css";

const Section4 = () => {
  return (
    <div className="form-cover">
      <p className="form-heading">Get in Touch!</p>
      <div className="form-box">
        <div class="wrapper">
          <h2>CONTACT US</h2>
          <form action="" method="POST">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input
                type="text"
                name="Name"
                id="name"
                placeholder="First and Last"
                required
                minlength="3"
                maxlength="25"
              />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                name="Message"
                id="message"
                rows="5"
                placeholder="Type your message here...."
              ></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section4;
