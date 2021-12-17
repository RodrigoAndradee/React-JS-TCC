/* eslint-disable react/prop-types */
import React, { createContext } from "react";

import getSystemConstantsFile from "../hooks/constantsHook";

const ConstantsHooks = createContext();

const ConstantsProvider = ({ children }) => {
  const { constantsFile } = getSystemConstantsFile();

  return (
    <ConstantsHooks.Provider
      value={{
        constantsFile,
      }}
    >
      {children}
    </ConstantsHooks.Provider>
  );
};

export { ConstantsProvider };
export default ConstantsHooks;
