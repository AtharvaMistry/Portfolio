import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/jaimeen-photo.jpg";
import classes from "../../styles/hero.module.css";
// import myResume from ""

const Hero = () => {
  // const openPdfInNewTab = () => {
  const pdfUrl = "../../public/images/my-resume/resume_jaimeen.pdf";
  // window.open(pdfUrl, '_blank');
  // };
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Jaimeen Makavana</h2>
              <h5 className="mb-4">Full-Stack Developer</h5>
              <p>
                Hi! My name is Jaimeen. I am a{" "}
                <span style={{ color: "#01d293", fontWeight: "bold" }}>
                  {" "}
                  MERN/Next.js / MEAN Stack Devloper.{" "}
                </span>{" "}
                I am a skilled MERN/Next.js and MEAN stack developer at WebApster.
                With expertise in both front-end and back-end technologies, I
                have a comprehensive understanding of full-stack development.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#contact">Hire me</Link>
                </button>

                <button className="secondary__btn">
                <a href="/images/my-resume/resume_jaimeen.pdf" download>
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent ">
                  <h6>Experience</h6>
                  <h5 className="mb-0">2 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
