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
                <img src={require("./Impetus_logo.PNG")} />
                <span>Software Engineer (2019-Present)</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque, facilis quo maiores magnam modi ab libero praesentium
                  blanditiis.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <div className="timeline-content right">
                <img src={require("./Impetus_logo.PNG")} />
                <span>Associate Software Engineer (2018-2019)</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Atque, facilis quo. Maiores magnam modi ab libero praesentium
                  blanditiis consequatur aspernatur accusantium maxime molestiae
                  sunt ipsa.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Career;
