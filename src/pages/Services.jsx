import React from "react";
import { Col } from "reactstrap";
import "../styles/services.css";
import servicesData from "../assets/data/serviceData";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const ServicesList = () => {
  return (
    <Helmet title="Our Services">
        <CommonSection title="Our Services" />
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
    </Helmet>
  );
};

const ServiceItem = ({ item }) => (
  
  <Col  sm="4" >
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i class={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
 
);

export default ServicesList;
