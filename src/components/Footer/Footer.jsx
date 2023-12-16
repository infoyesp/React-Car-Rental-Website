import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

 

  {
    path: "/services",
    display: "Services",
  },
 

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                  myTVS Erode  <br />  Siragiri Vel Automobiles
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Get all your car needs in a single place. Have anything specific in mind for your love (cars) share your thoughts with us and bring it into reality with our professional hands
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Office</h5>
              <p className="office__info">Address: 330/1, Athappampalayam, post, Benz club, Vallipurathanpalayam, Tamil Nadu 638112</p>
              <p className="office__info">Phone: +91 8878475963</p>

              <p className="office__info">Email: muhib5532@gmail.com</p>
 
              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="12">
              <div className="mb-4">
                <h5 className="footer__link-title">Contact us</h5>
                <p className="section__description">To know more</p>
                <div className="whatsapp-chat">
                  <a
                    href={`https://wa.me/${+919001270298}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="contact__btn contact__btn-whatsapp">
                      <i className="ri-whatsapp-line"></i> Chat on WhatsApp
                    </button>
                  </a>
                </div>
              </div>
            </Col>
              
     

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Siragiri Vel Automobiles. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
