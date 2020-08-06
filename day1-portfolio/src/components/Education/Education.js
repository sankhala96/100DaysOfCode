import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "./Education.css";

function Education() {
  return (
    <div className="education-tab">
      <div className="education-tab-icon">
        <FontAwesomeIcon icon={faGraduationCap} />
      </div>
      <div className="education-tab-content">
          <div id="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <div className="timeline-content">
                  <h4>Bachelor's Degree (2014-2018)</h4>
                <span>Acropolis Institute of Technology and Research</span>
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
                <h4>School Education (2000-2014)</h4>
                <span>Dashpur Vidhyalaya</span>
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

export default Education;
