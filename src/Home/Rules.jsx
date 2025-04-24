import React, { useState, useEffect } from "react";

import { Row, Col, Collapse } from "react-bootstrap";

import StarBulletList from "../elements/StarBulletList";

import useMerlinContext from "../hooks/useMerlinContext";

const Rules = () => {
  const { page } = useMerlinContext();
  const [open, setOpen] = useState(false);

  const willDrawList = [
    "human and humanoid characters.",
    "original characters and fanart.",
  ];

  const willNotDrawList = ["NSFW", "Furries", "Mechs"];

  useEffect(() => {
    if (page === "Rules") setOpen(true);
    else if (page !== "Rules" && open) setOpen(false);
  }, [page]);

  return (
    <Collapse in={open}>
      <div>
        <Row className="d-flex justify-content-center align-items-center">
          <div className="mainHeaderText d-flex justify-content-center align-items-center w-25 ">
            Rules
          </div>
        </Row>
        <Row>
          <Col>
            <div className="subHeaderText">I will draw</div>
            <StarBulletList list={willDrawList} />
          </Col>
          <Col>
            <div className="subHeaderText">I will now draw</div>
            <StarBulletList list={willNotDrawList} />
          </Col>
        </Row>
      </div>
    </Collapse>
  );
};

export default Rules;
