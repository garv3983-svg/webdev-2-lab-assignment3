import React from 'react';
import '../styles/Header.css';

function Header({ students }) {
  const passCount = students.filter(s => s.score >= 40).length;
  const failCount = students.filter(s => s.score < 40).length;
  const avg = students.length
    ? Math.round(students.reduce((sum, s) => sum + s.score, 0) / students.length)
    : 0;

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <p className="header-eyebrow">Web Dev II · React Unit</p>
          <h1 className="header-title">Student Scoreboard</h1>
        </div>

        <div className="header-stats">
          <div className="stat-chip">
            <span className="value">{students.length}</span>
            <span className="label">Total</span>
          </div>
          <div className="stat-chip pass">
            <span className="value">{passCount}</span>
            <span className="label">Pass</span>
          </div>
          <div className="stat-chip fail">
            <span className="value">{failCount}</span>
            <span className="label">Fail</span>
          </div>
          <div className="stat-chip">
            <span className="value">{avg}</span>
            <span className="label">Avg</span>
          </div>
        </div>
      </div>
      <div className="header-divider" />
    </header>
  );
}

export default Header;
