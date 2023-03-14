import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Feel free to contact me at:</p>
      <ul>
        <li>Email: contact@example.com</li>
        <li>Phone: 555-555-5555</li>
        <li>Address: 123 Main St, Anytown USA</li>
        <li>
          {" "}
          <a
            className="btn btn-info"
            href="https://github.com/annabenari/my-portfolio/blob/main/src/CV%20Anna%20Benari%20G.pdf"
            target="_blank"
          >
            CV
          </a>
        </li>
        <li>
          <Link className="btn btn-warning" to="https://github.com/annabenari">
            Github
          </Link>
        </li>
        <li>
          <Link
            className="btn btn-info"
            to="https://www.linkedin.com/in/anna-benari-27b1881a5/"
          >
            LinkedIn
          </Link>
        </li>
      </ul>

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <div class="card">
              <div class="card-header">Handling Events</div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="message">Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
