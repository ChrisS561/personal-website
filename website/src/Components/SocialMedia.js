import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./ComponentCSS/SocialMedia.css"

export default function SocialMedia() {
  return (
    <footer className="text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            href="https://github.com/ChrisS561"
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998", borderRadius: "50%" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            href="https://www.linkedin.com/in/chrissmithjr/"
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca", borderRadius: "50%" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </section>
      </div>
    </footer>
  );
}
