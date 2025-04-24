import React from "react";

import { Row } from "react-bootstrap";

import useMerlinContext from "../hooks/useMerlinContext";

import Rules from "./Rules";
import Showcase from "./Showcase";
import TandC from "./TandC";
import Order from "./Order";

const Content = () => {
  const { page } = useMerlinContext();

  return (
    <Row>
      {page === "Rules" && <Rules />}
      {page === "Showcase" && <Showcase />}
      {page === "T&C" && <TandC />}
      {page === "Order Here!" && <Order />}
    </Row>
  );
};

export default Content;
