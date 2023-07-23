import React from "react";
import resume from "../assets/docs/KevinSmallResume.pdf";

// Resume page layout
function Resume() {
  return (
    <>
      <div className="contentContainer">
        <h2 className="contentTitle">Resume</h2>
        <hr style={{ margin: "5px 0 20px 0" }} />
        <div className="aboutContainer">
          <embed src={resume} type="application/pdf" width="100%" height="800px" />
        </div>
      </div>
    </>
  );
}

export default Resume;
