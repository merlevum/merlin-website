import React from "react";

import { Button } from "react-bootstrap";

import useMerlinContext from "../hooks/useMerlinContext";

const CustomButton = ({ title = "" }) => {
  const { handleClick, page } = useMerlinContext();

  return <Button className={`${page === title ? "buttonActive " : "buttonPassive "}`} style={{width: "200px", maxWidth: "200px", mixWidth: "200px"}} onClick={() => handleClick(title)}>{title}</Button>;
};

export default CustomButton;
