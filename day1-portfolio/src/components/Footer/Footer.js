import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="jumbotron footer-container">
                <div className="footer-top">
                    <div className="contact-info">
                        <h4>
                            Contact
                            <strong> Details</strong>
                        </h4>
                        <ul className="contact-info-list">
                            <li>
                                <FontAwesomeIcon icon={faHome}/>
                                Indore, India
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone}/>
                                +91-8989056090
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                sankhalayash96@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                        © Yash Sankhala. All rights reserved.
                    </div>
            </div>
        </footer>
    )
}

export default Footer;