import React, { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';

const initialStudents = [
  { id: 1, name: 'Arjun Sharma',    score: 82 },
  { id: 2, name: 'Priya Nair',      score: 67 },
  { id: 3, name: 'Rahul Verma',     score: 34 },
  { id: 4, name: 'Sneha Iyer',      score: 91 },
  { id: 5, name: 'Kabir Mehta',     score: 55 },
  { id: 6, name: 'Ananya Gupta',    score: 28 },
];

let nextId = initialStudents.length + 1;

function App() {
  const [students, setStudents] = useState(initialStudents);

  const handleAddStudent = ({ name, score }) => {
    setStudents(prev => [...prev, { id: nextId++, name, score }]);
  };

  const handleUpdateScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: newScore } : s)
    );
  };

  const handleDelete = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Header students={students} />
        <StudentTable
          students={students}
          onUpdateScore={handleUpdateScore}
          onDelete={handleDelete}
        />
        <AddStudentForm onAddStudent={handleAddStudent} />
      </div>
    </div>
  );
}

export default App;
