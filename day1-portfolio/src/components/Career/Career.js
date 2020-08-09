import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./Career.css";

function Career() {
  return (
    <div className="career-tab">
      <div className="career-tab-icon">
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
      <div className="career-tab-content">
          <div id="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <div className="timeline-content">
                <img alt="logo" src={process.env.PUBLIC_URL + "/Impetus_logo.PNG"} />
                <span>Software Engineer (2019-Present)</span>
                <p>
                  This job is all about creating fast and reusable UI components.
                  Most of the task include working with different UI framworks.
                  Majorly working with React JS and Node JS
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <div className="timeline-content right">
                <img alt="logo" src={process.env.PUBLIC_URL + "/Impetus_logo.PNG"} />
                <span>Associate Software Engineer (2018-2019)</span>
                <p>
                  This job is all about creating fast and reusable UI components.
                  Most of the task include working with different UI framworks.
                  Majorly working with React JS and Node JS
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Career;
