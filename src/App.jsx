import React, { useMemo, useState } from 'react';
import rawEntries from './data/entries';
import topicRegistry from './data/topics';
import Header from './components/Header';
import TopicFilter from './components/TopicFilter';
import SearchBar from './components/SearchBar';
import DailyDigest from './components/DailyDigest';
import Footer from './components/Footer';

function sortByDateDesc(entries) {
  return [...entries].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function App() {
  const sortedEntries = useMemo(() => sortByDateDesc(rawEntries), []);
  const [activeTopic, setActiveTopic] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const topicsInUse = useMemo(() => {
    const found = new Set();
    sortedEntries.forEach((day) => day.questions.forEach((q) => found.add(q.topic)));
    // Keep the order defined in topics.js, drop any topic that isn't actually used.
    return Object.keys(topicRegistry).filter((t) => found.has(t));
  }, [sortedEntries]);

  const totalQuestions = useMemo(
    () => sortedEntries.reduce((sum, day) => sum + day.questions.length, 0),
    [sortedEntries]
  );

  const filteredEntries = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return sortedEntries
      .map((day) => {
        const questions = day.questions.filter((q) => {
          const matchesTopic = activeTopic === 'All' || q.topic === activeTopic;
          if (!matchesTopic) return false;
          if (!term) return true;
          return (
            q.question.toLowerCase().includes(term) ||
            q.answer.toLowerCase().includes(term) ||
            q.topic.toLowerCase().includes(term)
          );
        });
        return { ...day, questions };
      })
      .filter((day) => day.questions.length > 0);
  }, [sortedEntries, activeTopic, searchTerm]);

  const lastUpdated = sortedEntries[0]?.date;

  return (
    <div className="app-shell">
      <Header
        totalQuestions={totalQuestions}
        totalDays={sortedEntries.length}
        lastUpdated={lastUpdated}
      />

      <div className="app-controls">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <TopicFilter
          topics={topicsInUse}
          activeTopic={activeTopic}
          onSelect={setActiveTopic}
        />
      </div>

      <main className="app-main">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((day) => <DailyDigest key={day.date} day={day} />)
        ) : (
          <p className="empty-state">
            No questions match that search yet. Try a different keyword or clear the topic filter.
          </p>
        )}
      </main>

      <Footer lastUpdated={lastUpdated} />
    </div>
  );
}
