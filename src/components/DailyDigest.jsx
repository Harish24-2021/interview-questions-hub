import React from 'react';
import QuestionCard from './QuestionCard';

function formatDate(isoDate) {
  const d = new Date(`${isoDate}T00:00:00`);
  return d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

export default function DailyDigest({ day }) {
  return (
    <section className="digest-day" aria-labelledby={`day-${day.date}`}>
      <h2 id={`day-${day.date}`} className="digest-day-heading">
        <span className="digest-day-date">{formatDate(day.date)}</span>
        <span className="digest-day-count">
          {day.questions.length} question{day.questions.length !== 1 ? 's' : ''}
        </span>
      </h2>
      <ol className="question-list">
        {day.questions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </ol>
    </section>
  );
}
