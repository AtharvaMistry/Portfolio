import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/img-01.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Rajesh Patel</h6>
                    <h6>Software Engineer</h6>
                  </div>
                </div>

                <p>
                  Jaimeen Makavana is an exceptional full-stack developer who
                  has greatly impressed me with his talent and expertise. His
                  dedication to delivering high-quality solutions is evident in
                  every project he undertakes. Working with Jaimeen has been a
                  seamless experience, as he consistently exceeds expectations
                  and demonstrates a strong commitment to client satisfaction.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/img-03.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Vikram Singh</h6>
                    <h6>Web Developer</h6>
                  </div>
                </div>

                <p>
                  Vikram Singh is a highly skilled full-stack developer who
                  consistently delivers exceptional results. His attention to
                  detail and problem-solving abilities are truly remarkable.
                  Working with Vikram has been a pleasure, and I highly
                  recommend him for any web development project.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/img-02.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Rahul Sharma's</h6>
                    <h6>Web Designer</h6>
                  </div>
                </div>
                <p>
                  Rahul Sharma's expertise as a full-stack developer is
                  outstanding. His ability to conceptualize and execute complex
                  projects with precision and efficiency is impressive. Rahul's
                  commitment to delivering top-notch solutions and excellent
                  collaboration skills make him a valuable asset to any
                  development team.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
