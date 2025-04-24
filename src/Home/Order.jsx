import React, { useState, useEffect } from "react";

import { Row, Col, Image, Collapse } from "react-bootstrap";

import StarButton from "../elements/StarButton";
import StarBulletList from "../elements/StarBulletList";

import useMerlinContext from "../hooks/useMerlinContext";

import order_border from "../images/order_border.jpg";

const Order = () => {
  const { page } = useMerlinContext();
  const [open, setOpen] = useState(false);

  const orderButtonData = [
    { brand: "email", externalLink: "mailto:merlinimber@gmail.com" },
    { brand: "kofi", externalLink: "https://ko-fi.com/merlevum" },
  ];

  const orderList = [
    "You need to pay first before I start your commission. No refunds after approved sketch.",
    "If you want specific custom size for your artwork, please mention that in your request.",
    "If you want to see the progress, you can contact me via my Discord or Email, and you can make changes while I'm doing your commission.",
    "Payment will be via Paypal or Ko-Fi.",
    "All commissions will have a signature, do not remove it.",
    "My base price list is for your reference only; the final price of the commission is decided on a case by case basis after I've received your commission request, and depends on conversion rates as well. Please DO NOT send me any payment before I've provided a quote for you.",
  ];

  useEffect(() => {
    if (page === "Order Here!") setOpen(true);
    else if (page !== "Order Here!" && open) setOpen(false);
  }, [page]);

  return (
    <Collapse in={open}>
      <div>
        <Row>
          <Col xs={10}>
            <div className="mainHeaderText d-flex justify-content-center align-items-center">Order Here!</div>

            <Row className="d-flex w-100 justify-content-center align-items-center gap-2">
              {orderButtonData.map((data) => (
                <StarButton key={data.externalLink} data={data} />
              ))}
            </Row>
            <div>
              <StarBulletList list={orderList} />
            </div>
          </Col>
          <Col xs={2}>
            <Image
              src={order_border}
              className="d-xs-flex d-md-none"
              width={100}
            />
            <Image
              src={order_border}
              className="d-none d-md-flex d-lg-none"
              width={110}
            />
            <Image
              src={order_border}
              className="d-none d-lg-flex d-xl-none"
              width={150}
            />
            <Image
              src={order_border}
              className="d-none d-xl-flex "
              width={175}
            />
          </Col>
        </Row>
      </div>
    </Collapse>
  );
};

export default Order;
