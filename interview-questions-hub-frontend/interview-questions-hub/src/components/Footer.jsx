import React from 'react';

export default function Footer({ lastUpdated }) {
  return (
    <footer className="site-footer">
      <p>
        Built with React &amp; Webpack, deployed on GitHub Pages. New questions are added by
        editing <code>src/data/entries.js</code> — see the project README for the daily update
        workflow.
      </p>
      <p className="site-footer-meta">Archive last touched {lastUpdated || '—'}.</p>
    </footer>
  );
}
