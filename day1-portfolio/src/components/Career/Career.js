import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "./Career.css";

function Career() {
  return (
    <div className="career-tab">
      <div className="career-tab-icon">
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
      <div className="career-tab-content">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Impetus Technologies</h3>
            <span>Software Engineer</span>
            <p>
              This Job is all about creating optimised JavaScript application.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
          <h3>Impetus Technologies</h3>
          <span>Associate Software Engineer</span>
          <p>
            This Job is all about creating optimised JavaScript application
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Career;
