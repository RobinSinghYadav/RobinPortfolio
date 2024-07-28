import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Robin Singh Yadav </span>
            from <span className="purple"> Bareilly, India.</span>
            <br />
            I am currently pursuing my <span className="purple"> B.Tech in CSE</span> .
            <br />
            I have great knowledge of <span className="purple"> Front-End Development</span> and <span className="purple"> Data Analyasis.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Robin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
