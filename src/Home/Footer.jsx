import React from "react";

import { Row, Col } from "react-bootstrap";

import StarButton from "../elements/StarButton";

const Footer = () => {
  const footerButtonData = [
    { brand: "email", externalLink: "mailto:merlinimber@gmail.com" },
    { brand: "bluesky", externalLink: "https://bsky.app/profile/merlevum.bsky.social", },
    { brand: "etsy", externalLink: "https://etsy.com/shop/grimoireprint" },
    { brand: "inprnt", externalLink: "https://www.inprnt.com/gallery/merlevum", },
    { brand: "instagram", externalLink: "https://instagram.com/merlevum" },
    { brand: "kofi", externalLink: "https://ko-fi.com/merlevum" },
    { brand: "tiktok", externalLink: "https://www.tiktok.com/@merlevum" },
    { brand: "tumblr", externalLink: "https://www.tumblr.com/merlevum" },
    { brand: "twitch", externalLink: "https://www.twitch.tv/merlevum" },
    { brand: "youtube", externalLink: "https://www.youtube.com/@merlevum" },
  ];
  return (
    <>
      <Row className="d-xs-flex d-md-none justify-content-between ">
        {footerButtonData.map((data, index) => index < 5 ? <StarButton key={data.externalLink} data={data} /> : null )}
      </Row>
      <Row className="d-xs-flex d-md-none justify-content-between ">
        {footerButtonData.map((data, index) => index >= 5 ? <StarButton key={data.externalLink} data={data} /> : null )}
      </Row>
      <Row className="d-none d-md-flex justify-content-between ">
        {footerButtonData.map((data) => <StarButton key={data.externalLink} data={data} />)}
      </Row>
    </>
  );
};

export default Footer;
