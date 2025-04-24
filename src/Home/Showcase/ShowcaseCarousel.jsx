import React, { useState } from "react";

import { Image, Row, Carousel } from "react-bootstrap";

import CarouselModal from "../CarouselModal";

import showcase1 from "../../images/showcase1.jpg";
import showcase2 from "../../images/showcase2.jpg";
import showcase3 from "../../images/showcase3.jpg";

const ShowcaseCarousel = () => {
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState(null);

  const handleClick = (item) => {
    setItem(item);
    setModalShow(true);
  };

  return (
    <>
      <Row className="mt-3">
        <Carousel>
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <Image src={showcase1} className="showcaseCarousel" onClick={() => handleClick(showcase1)} />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <Image src={showcase2} className="showcaseCarousel" onClick={() => handleClick(showcase2)} />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <Image src={showcase3} className="showcaseCarousel" onClick={() => handleClick(showcase3)} />
            </div>
          </Carousel.Item>
        </Carousel>
      </Row>
      <CarouselModal item={item} show={modalShow} onHide={setModalShow}/>
    </>
  );
};

export default ShowcaseCarousel;
