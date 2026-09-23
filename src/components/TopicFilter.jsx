import React from 'react';
import { colorFor } from '../data/topics';

export default function TopicFilter({ topics, activeTopic, onSelect }) {
  return (
    <div className="topic-filter" role="group" aria-label="Filter by topic">
      <button
        type="button"
        className={`topic-chip ${activeTopic === 'All' ? 'is-active' : ''}`}
        style={{ '--chip-color': '#1B1F23' }}
        onClick={() => onSelect('All')}
      >
        All
      </button>
      {topics.map((topic) => (
        <button
          key={topic}
          type="button"
          className={`topic-chip ${activeTopic === topic ? 'is-active' : ''}`}
          style={{ '--chip-color': colorFor(topic) }}
          onClick={() => onSelect(topic)}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}
