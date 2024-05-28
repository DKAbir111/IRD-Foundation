import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faHeart, faCogs, faEnvelope, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import './LeftNav.css';

function LeftNav() {
  return (
    <div className="left-nav">
      <div className="nav-item">
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faBook} />
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faCogs} />
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faCalendar} />
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}

export default LeftNav;
