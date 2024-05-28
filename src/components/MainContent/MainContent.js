import React from 'react';
import './MainContent.css';
import contentData from '../../Data/content';
import { FaBook, FaPen, FaShareAlt, FaCopy, FaHeart } from 'react-icons/fa';

function MainContent() {
  return (
    <div className="main-content">
      {contentData.map((section, index) => (
        <div key={index} className='card'>
          <h3>{section.chapterTitle}</h3>
          {section.text.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p>{section.arabicText}</p>
          <div className="icons">
        <FaBook size={25}/>
        <FaPen size={25}/>
        <FaShareAlt size={25}/>
        <FaCopy size={25}/>
        <FaHeart size={25}/>
      </div>
        </div>
      ))}
     
    </div>
  );
}

export default MainContent;
