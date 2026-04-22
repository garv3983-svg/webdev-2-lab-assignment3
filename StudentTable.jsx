import React from 'react';
import StudentRow from './StudentRow';
import '../styles/StudentTable.css';

function StudentTable({ students, onUpdateScore, onDelete }) {
  // Sort by score descending for ranking
  const sorted = [...students].sort((a, b) => b.score - a.score);

  return (
    <section className="table-section">
      <div className="table-section-header">
        <span className="section-label">Leaderboard</span>
        <span className="student-count">{students.length} student{students.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="table-wrapper">
        <table className="scoreboard-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Score / 100</th>
              <th style={{ textAlign: 'center' }}>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={5}>
                  <div className="empty-state">
                    <span className="empty-icon">🎓</span>
                    No students yet. Add one below!
                  </div>
                </td>
              </tr>
            ) : (
              sorted.map((student, index) => (
                <StudentRow
                  key={student.id}
                  student={student}
                  rank={index + 1}
                  onUpdateScore={onUpdateScore}
                  onDelete={onDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StudentTable;
