import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Problem Solving" icon="ri-apps-line" />

                <ServicesItem title="Web Designing" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Web Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              As a full-stack developer, I bring a comprehensive skill set and expertise to create dynamic and innovative web solutions. From front-end development to back-end programming, I am dedicated to delivering high-quality, scalable, and user-friendly applications. With a passion for cutting-edge technologies, I strive to exceed expectations and bring your digital ideas to life.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
