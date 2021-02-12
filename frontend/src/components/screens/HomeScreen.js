import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  ProgressBar,
  Button,
} from "react-bootstrap";
import { Link } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../layout/Loader";
import Message from "../layout/Message";
import Project from "../layout/Project";
import { getProjectList } from "../../redux/actions/projectAction";
import ContactForm from "../layout/ContactForm";
// import { Link } from "react-router-dom";



export default function HomeScreen() {
  AOS.init();
  //////////////////////////////

  const dispatch = useDispatch();
  const listProjects = useSelector((state) => state.listProjects);
  const { loading, projects, error } = listProjects;

  useEffect(() => {
    dispatch(getProjectList());
  }, [dispatch]);

  return (
    <Container>
      <Row className="py-5" id="home">
        <Col md={6} xs={12}>
          <h1>Elyas Arkin</h1>
          <h3 className="py-5">Full Stack Developer</h3>
          <Row className="py-3">
            <Col lg={4} md={6} xs={12} className="py-2">
              <Button variant="outline-secondary" block>
                <Link to="contact" spy={true} smooth={true} duration={0}>
                  Hire me
                </Link>
              </Button>
            </Col>
            <Col lg={6} md={6} xs={12} className="py-2">
              <Button variant="dark" block>
                <Link
                  style={{ color: "white" }}
                  to="portofolio"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  Explore more
                </Link>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={12}>
          <Image src="images/me.jpg" fluid></Image>
        </Col>
      </Row>
      <hr />
      <Row id="about">
        <Col lg={12}>
          <h1>About</h1>
        </Col>
        <Col lg={12}>
          <h5 className="py-5">
            Hello! I'm Elyas and Im{" "}
            <span className="star">
              an Aquarius which means that Im progressive, independent,
              intelligent, unique, and idealistic,{" "}
            </span>{" "}
            Im also a MERN full stack web developer, a React enthusiast, and a
            guy who is slighty obsessed with code quality. Also I'm a Full stack
            Tester as well. Currently I’m available for any challenges or new
            possibilities. If you have a project that you want to get started or
            think you need my help with, then get in touch.
          </h5>
        </Col>
      </Row>
      <hr />
      <Row
        className="py-5"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <Col lg={12}>
          <h1 className="py-5">MY SKILLS</h1>
        </Col>
        <Col lg={4} md={3} xs={12} className="py-3">
          <h2 className="pb-3">HTML/CSS</h2>
          <ProgressBar animated now={100} />
        </Col>
        <Col lg={4} md={3} xs={12} className="py-3">
          <h2 className="pb-3">JavaScript</h2>
          <ProgressBar animated now={85} />
        </Col>
        <Col lg={4} md={3} xs={12} className="py-3">
          <h2 className="pb-3">ReactJS</h2>
          <ProgressBar animated now={85} />
        </Col>
        <Col lg={4} md={3} xs={12} className="py-3">
          <h2 className="pb-3">NodeJS</h2>
          <ProgressBar animated now={85} />
        </Col>
        <Col lg={4} md={3} xs={12} className="py-3">
          <h2 className="pb-3">ExpressJS</h2>
          <ProgressBar animated now={85} />
        </Col>
      </Row>
      <hr />
      <Row
        className="background_img"
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <Col lg={12} className="p-5">
          <h1 className="text-white">WHAT I DO</h1>
        </Col>
        <Col lg={6} md={6} xs={12} className="p-5">
          <h3 className=" text-white py-3">Front-end</h3>
          <h5 className=" text-white">
            As a javascript developer, I have experience in HTML5 and CSS3
            techniques working with different types of library as a Bootstap and
            more and advanced javascript MVC frameworks such as React.js
          </h5>
        </Col>
        <Col lg={6} md={6} xs={12} className="p-5">
          <h3 className=" text-white py-3">Back-end</h3>
          <h5 className=" text-white">
            Utilising node.js frameworks such as express, mongoDB database
            managment. Handson expereince and practical knowladge on Rest API
          </h5>
        </Col>
      </Row>
      <hr />
      <Row
        className="py-5"
        id="portofolio"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <Col lg={12} className="py-5">
          <h1>MY RECENT WORKS</h1>
        </Col>

        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <Message variant="info">{error}</Message>
        ) : projects.length ? (
          <>
            {projects
              .map((project) => (
                <Col sm={12} md={6} lg={4} key={project._id}>
                  <Project project={project} />
                </Col>
              ))
              .reverse()}
          </>
        ) : (
          <Message>No project uploaded yet</Message>
        )}
      </Row>
      <hr />

      <ContactForm />

      <ScrollToTop smooth color="#343a40" />
    </Container>
  );
}
