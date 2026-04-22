import React, { useState, useEffect } from 'react';
import '../styles/StudentRow.css';

function StudentRow({ student, rank, onUpdateScore, onDelete }) {
  const [inputScore, setInputScore] = useState(student.score);
  const [saved, setSaved] = useState(false);

  // Keep input in sync if parent updates score externally
  useEffect(() => {
    setInputScore(student.score);
  }, [student.score]);

  const isPass = student.score >= 40;
  const barWidth = Math.min(Math.max(student.score, 0), 100);

  const rankClass =
    rank === 1 ? 'top-1' : rank === 2 ? 'top-2' : rank === 3 ? 'top-3' : '';

  const handleUpdate = () => {
    const parsed = Number(inputScore);
    if (isNaN(parsed) || parsed < 0 || parsed > 100) return;
    onUpdateScore(student.id, parsed);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleUpdate();
  };

  return (
    <tr className="student-row">
      {/* Rank */}
      <td className="td-rank">
        <div className={`rank-badge ${rankClass}`}>{rank}</div>
      </td>

      {/* Name */}
      <td className="td-name">
        <div className="student-name">{student.name}</div>
      </td>

      {/* Score edit */}
      <td className="td-score">
        <div className="score-edit-wrapper">
          <div>
            <input
              type="number"
              className="score-input"
              value={inputScore}
              min={0}
              max={100}
              onChange={e => setInputScore(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="score-bar-wrapper">
              <div
                className={`score-bar-fill ${isPass ? 'pass' : 'fail'}`}
                style={{ width: `${barWidth}%` }}
              />
            </div>
          </div>
          <button
            className={`btn-update ${saved ? 'saved' : ''}`}
            onClick={handleUpdate}
          >
            {saved ? '✓ Saved' : 'Update'}
          </button>
        </div>
      </td>

      {/* Status */}
      <td className="td-status">
        <span className={`status-badge ${isPass ? 'pass' : 'fail'}`}>
          <span className="status-dot" />
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>

      {/* Delete */}
      <td className="td-actions">
        <button
          className="btn-delete"
          onClick={() => onDelete(student.id)}
          title="Remove student"
        >
          ✕
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
