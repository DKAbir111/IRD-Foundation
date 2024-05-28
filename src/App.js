import React from 'react';
import './App.css';
import LeftNav from './components/LeftNav/LeftNav.js';
import TopNav from './components/TopNav/TopNav.js';
import LeftContent from './components/LeftContent/LeftContent.js';
import MainContent from './components/MainContent/MainContent.js';

function App() {
  return (
    <div className="app">
      <TopNav />
      
      <div className="main-layout">
      <LeftNav />
        <div className="content">
          <LeftContent />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
