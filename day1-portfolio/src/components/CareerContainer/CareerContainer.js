import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faGraduationCap, faGem } from '@fortawesome/free-solid-svg-icons'
import Career from '../Career/Career';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import './CareerContainer.css';

const tabData = [
    { name: 'Career', icon: faPaperPlane },
    { name: 'Education', icon: faGraduationCap },
    { name: 'Skills', icon: faGem }
];

function Tabs(props) {
    return (
        <ul className="nav nav-tabs career-nav">
        {tabData.map((tab) => {
          return (
            <li
              key={tab.name}
              onClick={() => props.changeTab(tab)}
              className={props.activeTab.name === tab.name ? "active" : null}
            >
                <FontAwesomeIcon icon={tab.icon} style={{paddingRight: '5px'}}/>
                {tab.name}
            </li>
          );
        })}      
      </ul>
    )
}

function Content(props) {
    let content = null;
    if(props.activeTab.name === 'Career') {
        content = <Career />
    }
    else if(props.activeTab.name === 'Education') {
        content = <Education />
    }
    else if(props.activeTab.name === 'Skills') {
        content = <Skills />
    }

    return content;
}


function CareerContainer() {
    const [activeTab, handleClick] = useState(tabData[0]);
    return (
        <React.Fragment>
            <Tabs activeTab={activeTab} changeTab={(newTab) => handleClick(newTab)}/>
            <div className="tab-content">
              <Content activeTab={activeTab} />
            </div>
        </React.Fragment>
    )
}

export default CareerContainer;
