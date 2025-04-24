import React from "react";

import { Row, Col, Table, Image } from "react-bootstrap";

import StarBulletList from "../../elements/StarBulletList";

import commision_sheet from "../../images/commission_sheet.jpg";

const ShowcaseTable = () => {
  const showcaseList = [
    "Background will be simple unless discussed otherwise.",
    "Extra characters will cost more.",
  ];

  return (
    <>
      {/* for smaller screens --  table will be under commission sheet -- hidden on larger screens.*/}
      <Row className="d-flex d-md-none">
        <Image src={commision_sheet} className="mb-3" />

        <div className="generalContent">
          Choose between bust, half body, or full body commissions! Includes one
          character and simple background.
        </div>

        <Table striped bordered hover size="sm" className="mt-2">
          <thead>
            <tr>
              <th className="tableHeader">Bust</th>
              <th className="tableHeader">Half Body</th>
              <th className="tableHeader">Full Body</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tableContet">Line Art $20</td>
              <td className="tableContet">Line Art $30</td>
              <td className="tableContet">Line Art $40</td>
            </tr>
            <tr>
              <td className="tableContet">Flat Colours $30</td>
              <td className="tableContet">Flat Colours $50</td>
              <td className="tableContet">Flat Colours $60</td>
            </tr>
            <tr>
              <td className="tableContet">Rendered $40</td>
              <td className="tableContet">Rendered $60</td>
              <td className="tableContet">Rendered $80</td>
            </tr>
          </tbody>
        </Table>

        <StarBulletList list={showcaseList} />
      </Row>

      {/* for largers screens --  table will be next to commission sheet -- hidden on smaller screens.*/}
      <Row className="d-none d-md-flex">
        <Col>
          <div className="generalContent">
            Choose between bust, half body, or full body commissions! Includes
            one character and simple background.
          </div>

          <Table striped bordered hover size="sm" className="mt-2">
            <thead>
              <tr>
                <th className="tableHeader">Bust</th>
                <th className="tableHeader">Half Body</th>
                <th className="tableHeader">Full Body</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tableContet">Line Art $20</td>
                <td className="tableContet">Line Art $30</td>
                <td className="tableContet">Line Art $40</td>
              </tr>
              <tr>
                <td className="tableContet">Flat Colours $30</td>
                <td className="tableContet">Flat Colours $50</td>
                <td className="tableContet">Flat Colours $60</td>
              </tr>
              <tr>
                <td className="tableContet">Rendered $40</td>
                <td className="tableContet">Rendered $60</td>
                <td className="tableContet">Rendered $80</td>
              </tr>
            </tbody>
          </Table>

          <StarBulletList list={showcaseList} />
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <Image src={commision_sheet} style={{ maxWidth: "100%" }} />
        </Col>
      </Row>
    </>
  );
};

export default ShowcaseTable;
