import React, { useState } from 'react';
import '../styles/AddStudentForm.css';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = 'Name is required.';
    const s = Number(score);
    if (score === '') errs.score = 'Score is required.';
    else if (isNaN(s) || s < 0 || s > 100) errs.score = 'Score must be 0–100.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onAddStudent({ name: name.trim(), score: Number(score) });
    setName('');
    setScore('');
    setErrors({});
  };

  return (
    <section className="form-section">
      <div className="form-card">
        <div className="form-card-header">
          <div className="form-icon">➕</div>
          <div>
            <div className="form-card-title">Enroll New Student</div>
            <div className="form-card-subtitle">Fill in name and initial score</div>
          </div>
        </div>

        <form className="add-student-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label className="form-label" htmlFor="student-name">Full Name</label>
            <input
              id="student-name"
              type="text"
              className="form-input"
              placeholder="e.g. Arjun Sharma"
              value={name}
              onChange={e => { setName(e.target.value); setErrors(p => ({...p, name: ''})); }}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-field" style={{ maxWidth: '140px' }}>
            <label className="form-label" htmlFor="student-score">Score (0–100)</label>
            <input
              id="student-score"
              type="number"
              className="form-input score-field"
              placeholder="0–100"
              value={score}
              min={0}
              max={100}
              onChange={e => { setScore(e.target.value); setErrors(p => ({...p, score: ''})); }}
            />
            {errors.score && <span className="form-error">{errors.score}</span>}
          </div>

          <button type="submit" className="btn-submit">
            <span className="btn-submit-icon">+</span>
            Add Student
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddStudentForm;
