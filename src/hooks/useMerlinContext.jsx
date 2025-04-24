import { useContext } from "react";

import { MerlinContext } from "../context/MerlinContext";

const useMerlinContext = () => {
  const context = useContext(MerlinContext);

  if (!context) throw Error("Context error -- useMerlinContext out-of-scope.");

  return context;
};

export default useMerlinContext;
