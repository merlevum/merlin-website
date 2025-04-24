import React from "react";

import { Row, Col, Image } from "react-bootstrap";

import CustomButton from "../elements/CustomButton";

import avatar from "../images/avatar.png";

const Header = () => {
  return (
    <>
      {/*  larger screens - avatar and text side-by-side -- hidden on smaller screens*/}
      <Row className="d-none d-md-flex">
        <Col
          xs={3}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <Image className="d-none d-md-flex" src={avatar} height={300} style={{maxWidth: "100vw"}}/>
        </Col>
        <Col xs={9} md={6}>
          <div className="titleText">MERLEVUM</div>
          <div className="titleContent my-2">
            My name is Merlin and I'm both an artist and gamer. It's nice to
            meet you! If you're into games like Final Fantasy, the Witcher, and
            Kingdom Come Deliverance, you're in the right place!
          </div>
          <div className="titleContent my-2">
            Take a look around, you'll see commissions, and other ways to
            support me!
          </div>

          <Row className="d-none d-md-flex my-4">
            <div className="d-flex gap-1 justify-content-evenly  mb-1">
              <CustomButton title="Rules" />
              <CustomButton title="Showcase" />
            </div>
            <div className="d-flex gap-1 justify-content-evenly ">
              <CustomButton title="T&C" />
              <CustomButton title="Order Here!" />
            </div>
          </Row>
        </Col>
      </Row>

      {/*  smaller screens - avatar and text stacked -- hidden on largers screens*/}
      <Row className="d-flex d-md-none">
        <Image className="d-flex" src={avatar} style={{maxWidth: "70vw"}}/>

        <Col xs={12} md={6}>
          <div className="titleText">MERLEVUM</div>
          <div className="titleContent my-2">
            My name is Merlin and I'm both an artist and gamer. It's nice to
            meet you! If you're into games like Final Fantasy, the Witcher, and
            Kingdom Come Deliverance, you're in the right place!
          </div>
          <div className="titleContent my-2">
            Take a look around, you'll see commissions, and other ways to
            support me!
          </div>
        </Col>

        {/* Side-by-side buttons */}
        <Row className="d-none d-sm-flex d-md-none my-4">
          <div className="d-flex gap-1 justify-content-evenly ">
            <CustomButton title="Rules" />
            <CustomButton title="Showcase" />
            <CustomButton title="T&C" />
            <CustomButton title="Order Here!" />
          </div>
        </Row>

        {/* 2x2 stack buttons */}
        <Row className="d-flex d-sm-none my-4">
            <div className="d-flex gap-1 justify-content-evenly  mb-1">
              <CustomButton title="Rules" />
              <CustomButton title="Showcase" />
            </div>
            <div className="d-flex gap-1 justify-content-evenly ">
              <CustomButton title="T&C" />
              <CustomButton title="Order Here!" />
            </div>
          </Row>
      </Row>
    </>
  );
};

export default Header;
