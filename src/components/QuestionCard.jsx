import React, { useState } from 'react';
import { colorFor } from '../data/topics';

export default function QuestionCard({ question }) {
  const [open, setOpen] = useState(false);
  const accent = colorFor(question.topic);

  return (
    <li className="question-item" style={{ '--accent': accent }}>
      <button
        type="button"
        className="question-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="question-meta">
          <span className="topic-tag" style={{ color: accent }}>
            {question.topic}
          </span>
          <span className={`difficulty-tag difficulty-${question.difficulty.toLowerCase()}`}>
            {question.difficulty}
          </span>
        </span>
        <span className="question-text">{question.question}</span>
        <span className="question-toggle" aria-hidden="true">
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="question-answer">
          <p>{question.answer}</p>
        </div>
      )}
    </li>
  );
}
