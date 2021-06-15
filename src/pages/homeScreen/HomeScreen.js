import React from "react";

import GenericPage from "../../components/genericPage/GenericPage";

export default function homeScreen() {
  return (
    <>
      <GenericPage
        body={
          <iframe
            title="report"
            width="1280"
            height="1080"
            src="https://datastudio.google.com/embed/reporting/f86e0f9c-502d-4b99-807b-88dec5dd10af/page/LuBV"
            frameBorder="0"
          />
        }
      />
    </>
  );
}
