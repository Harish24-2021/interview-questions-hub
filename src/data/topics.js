// Central place to register topics. Add a new key here the first time
// you use a new `topic` value in entries.js and it'll pick up a colour
// and show up in the filter bar automatically.
const topics = {
  JavaScript: '#E3A008',
  React: '#3454D1',
  TypeScript: '#2B6CB0',
  CSS: '#B83280',
  HTML: '#C05621',
  'Node.js': '#2F7D5B',
  'System Design': '#6B46C1',
  Testing: '#0F766E',
  Behavioral: '#4A5568',
};

export const FALLBACK_COLOR = '#4A5568';

export function colorFor(topic) {
  return topics[topic] || FALLBACK_COLOR;
}

export default topics;
