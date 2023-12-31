import React from "react";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experience from "../assets/images/experience.png";
import "../styles/home.css";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import "../App.css";

import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MansoryImages from "../components/Image-gallery/MansoryImages";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Travelling opens the door to creating
                  <span className="highlight"> memories </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi ab distinctio obcaecati expedita maxime provident
                  saepe repudiandae itaque! Esse placeat qui tenetur incidunt
                  accusamus maiores.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* =========== Hero Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <Subtitle subtitle={"What We Serve"} />
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* =========== Hero Section End */}
      {/* =========== Feature Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* =========== Feature Section Start */}

      {/* =========== Experience Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience
                  <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br /> Odit, eligendi magnam. Reprehenderit corporis aliquam
                  explicabo!
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Sucessful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experience} alt="experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* =========== Experience Section End ============*/}
      {/* =========== Gallery Section Start ============*/}
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg="12">
            <MansoryImages />
          </Col>
        </Row>
      </Container>
      {/* =========== Gallery Section End ============*/}
      {/* =========== Testimonial Section Start ============*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* =========== Testimonial  Section End ============*/}

      {/* =========== Newsletter Section Start ============*/}
      <NewsLetter />
      {/* =========== Newsletter Section End ============*/}
    </>
  );
};

export default Home;
