import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankit Wadhwa </span>
            from <span className="purple"> Sonipat, Haryana, India.</span>
            <br />I am Enthusiastic and dedicated Software Developer with a Bachelor's degree in Information Technology from UIET,
              Panjab University, Chandigarh. 
              Currently employed full-time at Chaayos since July 2023,
              demonstrating proficiency in developing robust software solutions.
            <br />
            <br />
            I've done Projects in Machine Learning and Web Development apart from these, some other activities that I love to do!
          </p>
          <ul>
       
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Loves to convert ideas into code!"{" "}
          </p>
          <footer className="blockquote-footer">Ankit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
