import React, { createContext, useState } from "react";

const MerlinContext = createContext();

const MerlinProvider = ({ children }) => {
  const [page, setPage] = useState("");

  const handleClick = (input) => {
    if (input === page) setPage("");
    else setPage(input);
  };

  return (
    <MerlinContext.Provider value={{ page, setPage, handleClick }}>
      {children}
    </MerlinContext.Provider>
  );
};

export { MerlinContext, MerlinProvider };
