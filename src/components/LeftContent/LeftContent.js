import React, { useState } from 'react';
import './LeftContent.css';
import booksData from '../../Data/book';
import chaptersData from '../../Data/chapter';

// Extract unique book names
const bookNames = [...new Set(booksData.map(book => book.name))];

// Group chapters by book name
const chapters = chaptersData.reduce((acc, chapter) => {
  if (!acc[chapter.name]) {
    acc[chapter.name] = [];
  }
  acc[chapter.name].push(`চ্যাপ্টার ${chapter.id}`);
  return acc;
}, {});

function LeftContent() {
  const [activeTab, setActiveTab] = useState('books');
  const [selectedBook, setSelectedBook] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`left-content ${menuOpen ? 'show' : ''}`}>
        <div className="close-btn" onClick={toggleMenu}>&times;</div>
        <div className="content-header">
          <button
            className={`tab ${activeTab === 'books' ? 'active' : ''}`}
            onClick={() => setActiveTab('books')}
          >
            বই
          </button>
          <button
            className={`tab ${activeTab === 'chapters' ? 'active' : ''}`}
            onClick={() => setActiveTab('chapters')}
          >
            অধ্যায়
          </button>
        </div>
        <input
          type="text"
          placeholder="Search For Filter"
          className="search-input"
        />
        {activeTab === 'books' && (
          <div className="scrollable-content">
            {bookNames.map(book => (
              <div
                key={book}
                className="book-item"
                onClick={() => setSelectedBook(book)}
              >
                {book}
                <p>সর্বমোট হাদিস - ৭৫৬৩</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'chapters' && selectedBook && (
          <>
            <h3>{selectedBook} অধ্যায়</h3>
            <div className="scrollable-content">
              {chapters[selectedBook].map(chapter => (
                <div key={chapter} className="chapter-item">
                  {chapter}
                  <p>হাদিসের রেঞ্জ: 8-32</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default LeftContent;
