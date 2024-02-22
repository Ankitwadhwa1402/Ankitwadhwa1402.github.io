import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />Since July 2023, I've been fully immersed in my role as a 
              <i>
                <b className="purple"> Software Developer &nbsp;</b>
              </i>
              at Chaayos, where I've made significant contributions to 
              <i>
                <b className="purple"> ReactJS projects.</b>
              </i>
              <br />
              <br />
              Over this period, I've dedicated myself to enhancing our software ecosystem,
              having personally authored over 
              <i>
                <b className="purple">1.1 lakh lines of code. </b>
              </i> 
              These contributions have been instrumental in the successful deployment of our solutions across more than 150 cafes. 
              <br />
              <br />
              Beyond ReactJS, I've also delved into backend technologies such as 
              <i>
                <b className="purple"> &nbsp;Java, Spring Boot, MySQL, and MongoDB,  </b>
              </i> 
              broadening my skill set to ensure the robustness of our applications. 
              Additionally, my versatility extends to Android app development in Java, 
              where I 
              <i>
                <b className="purple"> &nbsp;single-handedly revamped the UI of two apps &nbsp;  </b>
              </i>within the company, 
              showcasing my ability to tackle challenges independently while delivering impactful results.
{/* 
              I'm currently learning ReactJS,
              My field of Interest's are building new &nbsp; */}
              {/* <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning.
                </b>
              </i> */}
              <br />
              <br />
              
              Whenever possible, I starts developing products
              with <b className="purple">Java, SpringBoot</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ankitwadhwa1402"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ankitwadhwa1402"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ankit-wadhwa-434020142/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ankitwadhwa1402/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
