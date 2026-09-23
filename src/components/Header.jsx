import React from 'react';

function formatDate(isoDate) {
  if (!isoDate) return '—';
  const d = new Date(`${isoDate}T00:00:00`);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Header({ totalQuestions, totalDays, lastUpdated }) {
  return (
    <header className="masthead">
      <p className="masthead-eyebrow">Dev Interview Digest</p>
      <h1 className="masthead-title">Interview questions, published daily.</h1>
      <p className="masthead-sub">
        A running archive of real questions asked in software and web developer interviews —
        JavaScript, React, CSS, HTML, Node.js, system design, and more. New entries most weekdays.
      </p>
      <dl className="masthead-stats">
        <div>
          <dt>Questions</dt>
          <dd>{totalQuestions}</dd>
        </div>
        <div>
          <dt>Days published</dt>
          <dd>{totalDays}</dd>
        </div>
        <div>
          <dt>Last update</dt>
          <dd>{formatDate(lastUpdated)}</dd>
        </div>
      </dl>
    </header>
  );
}
