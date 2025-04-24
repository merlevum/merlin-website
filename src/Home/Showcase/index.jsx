import React, { useState, useEffect } from "react";

import { Row, Collapse } from "react-bootstrap";

import ShowcaseTable from "./ShowcaseTable";
import ShowcaseCarousel from "./ShowcaseCarousel";

import useMerlinContext from "../../hooks/useMerlinContext";

const Showcase = () => {
  const { page } = useMerlinContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (page === "Showcase") setOpen(true);
    else if (page !== "Showcase" && open) setOpen(false);
  }, [page]);

  return (
    <Collapse in={open}>
      <div>
        <Row>
          <div className="mainHeaderText d-flex justify-content-center align-items-center">Showcase</div>
        </Row>

        <ShowcaseTable />
        <ShowcaseCarousel />
      </div>
    </Collapse>
  );
};

export default Showcase;
