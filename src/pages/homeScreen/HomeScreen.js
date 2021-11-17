import React from "react";

import GenericPage from "../../components/genericPage/GenericPage";

export default function homeScreen() {
  return (
    <GenericPage
      body={
        <iframe
          frameBorder="0"
          height="100%"
          src="https://datastudio.google.com/embed/reporting/f86e0f9c-502d-4b99-807b-88dec5dd10af/page/LuBV"
          title="report"
          width="100%"
        />
      }
    />
  );
}
