import { useEffect, useReducer } from "react";
import * as fs from "fs";

import { getConstantsFile } from "../store/actions/Constants";
import { ConstantsReducer } from "../store/reducers/Constants";

const path = require("path");

const GetSystemConstantsFile = () => {
  const [constantsFile, dispatchConstantsFile] = useReducer(ConstantsReducer);

  useEffect(() => {
    getConstantsFile()(dispatchConstantsFile);
  }, []);

  // fs.writeFile(
  //   path.resolve("/src/assets/", "constants-file.json"),
  //   JSON.stringify(constantsFile),
  //   function (err) {
  //     if (err) throw err;
  //     console.log("complete");
  //   }
  // );

  return { constantsFile };
};

export default GetSystemConstantsFile;
