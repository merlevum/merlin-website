import React from "react";

import { Container } from "react-bootstrap";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

// https://picsum.photos/200

const index = () => {
  return (
    <Container className="cardBG mt-4 mb-4 round-edge p-4" >
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default index;
