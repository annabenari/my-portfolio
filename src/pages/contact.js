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
          <Link className="btn btn-info" to="../cv.pdf" target="_blank">
            CV
          </Link>
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
    </div>
  );
}

export default Contact;
