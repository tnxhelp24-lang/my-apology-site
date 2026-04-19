import React, { useState } from 'react';
import './App.css';

const ApologyApp = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  const handleNoMove = () => {
    // Moves the button to a random spot within 200px of center
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    setNoButtonPos({ x, y });
    setNoCount(noCount + 1);
  };

  const phrases = [
    "No", "Are you sure?", "I'll never leave you", 
    "I am yours completely", "I promise to be better", 
    "Give me one last chance 🥺"
  ];

  if (isAccepted) {
    return (
      <div className="container">
        <div className="love-bg"></div>
        <div className="glass-card fade-in">
          <h1 className="title">Thank You ❤️</h1>
          <p className="message italic">
            "I am yours, completely and forever. I'll never let you down again."
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Background Love Image & Overlay */}
      <div className="love-bg"></div>
      <div className="overlay"></div>

      {/* Floating Hearts Effect */}
      <div className="hearts-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`
          }}>❤️</div>
        ))}
      </div>

      <div className="glass-card">
        <div className="icon-circle">⚓</div>
        <h2 className="subtitle">A SACRED PROMISE</h2>
        <h1 className="title">I'm never going anywhere...</h1>
        
        <div className="letter-body">
          <p>I am so sorry for everything I’ve done before. I hate that I hurt you.</p>
          <p>I promise, from this second forward, I will never hurt you again and I will never break your trust.</p>
          <p className="bold">I am yours completely. Give me only this last chance to show you.</p>
        </div>

        <div className="button-group">
          <button 
            className="btn-yes" 
            style={{ transform: `scale(${1 + noCount * 0.1})` }}
            onClick={() => setIsAccepted(true)}
          >
            I Forgive You
          </button>

          <button 
            className="btn-no"
            onMouseEnter={handleNoMove}
            onClick={handleNoMove}
            style={{ 
              transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
              transition: 'all 0.2s ease-out'
            }}
          >
            {phrases[Math.min(noCount, phrases.length - 1)]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApologyApp;