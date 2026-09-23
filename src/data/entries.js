/**
 * DAILY UPDATES LIVE HERE.
 * ------------------------------------------------------------------
 * To publish a new day of questions, copy the block below, paste it
 * at the TOP of the `entries` array, and fill it in. The app sorts
 * everything by date automatically, so exact placement doesn't matter,
 * but keeping newest-first makes the file easier to scan.
 *
 * {
 *   date: 'YYYY-MM-DD',
 *   questions: [
 *     {
 *       id: 'unique-slug-for-this-question',
 *       topic: 'JavaScript' | 'React' | 'CSS' | 'HTML' | 'Node.js' | 'System Design' | 'Behavioral' | 'TypeScript' | 'Testing',
 *       difficulty: 'Easy' | 'Medium' | 'Hard',
 *       question: 'The interview question, as asked.',
 *       answer: 'A short, direct model answer or hint (a few sentences).',
 *     },
 *   ],
 * }
 * ------------------------------------------------------------------
 */

const entries = [
  {
    date: '2026-09-23',
    questions: [
      {
        id: 'react-web-sockets', topic: 'React', difficulty: 'Medium',
        question: 'What are web sockets in react with an example',
        answer: `WebSocket is a browser API that creates a persistent, two-way connection between a React application and a WebSocket server.\n\nUnlike fetch(), where the client usually sends a request and waits for a response, WebSockets allow the server to push data to React at any time.\n\n},
      
      Example:
        import { useEffect, useState } from "react";

        function Notifications() {
          const [message, setMessage] = useState("");

          useEffect(() => {
  const socket = new WebSocket("wss://example.com");

  socket.onopen = () => {
    console.log("Connected");
  };

  socket.onmessage = (event) => {
    setMessage(event.data);
  };

  socket.onclose = () => {
    console.log("Disconnected");
  };

  return () => {
    socket.close();
  };
}, []);

return <div>{message}</div>;
}
      
        `}
    ]
  },
  {
    date: '2026-09-22',
    questions: [
      {
        id: '2026-09-22-react-code-splitting',
        topic: 'React',
        difficulty: 'Medium',
        question: 'What is React code splitting and why is it useful?',
        answer:
          `React code splitting is a technique to split your application into smaller bundles that can be loaded on demand. ` +
          `It is useful because it reduces the initial load time of the application by only loading the necessary code for the current view, ` +
          `improving performance and user experience. ` +
          `The rest of the chunks are requested dynamically as the user navigates your app or interacts with features.
          How to Implement Code Splitting in React?
          The easiest and most common way to implement code splitting is by combining Native JavaScript dynamic imports(import()) with React's built-in lazy and Suspense features
1. Component - Based Splitting: Use React.lazy() to dynamically import components only when they are needed, reducing the initial bundle size.
          2. Route - Based Splitting: Use a library like React Router to dynamically import route components, ensuring that only the code for the current route is loaded initially.
          
          `,
      },
      {
        id: '2026-09-22-react-server-components',
        topic: 'React',
        difficulty: 'Medium',
        question: 'What problem do React Server Components solve that Server-Side Rendering (SSR) alone does not?',
        answer:
          'SSR renders components to HTML on the server but still ships the component code to the client so it can hydrate. Server Components render on the server and never ship their JavaScript to the browser at all, which shrinks bundle size and lets you safely access databases or secrets directly inside a component, at the cost of losing client-side interactivity for that component.',
      },
      {
        id: '2026-09-22-js-event-loop',
        topic: 'JavaScript',
        difficulty: 'Medium',
        question: 'Explain the difference between the microtask queue and the macrotask queue in the JS event loop.',
        answer:
          'Microtasks (Promise callbacks, queueMicrotask) run immediately after the current call stack empties and before the browser repaints, and the queue is fully drained before moving on. Macrotasks (setTimeout, setInterval, I/O) are scheduled one at a time, with rendering and microtask draining allowed to happen between each one.',
      },
      {
        id: '2026-09-22-css-container-queries',
        topic: 'CSS',
        difficulty: 'Medium',
        question: 'How do container queries differ from media queries, and when would you reach for one over the other?',
        answer:
          'Media queries respond to the viewport size; container queries respond to the size of a containing element regardless of the viewport. Use container queries for components that need to look right no matter where they are dropped in a layout (a card in a sidebar vs. a card in a main column), and media queries for page-level layout shifts.',
      },
    ],
  },
  {
    date: '2026-09-21',
    questions: [
      {
        id: '2026-09-22-react-stop-watch-implementation',
        topic: 'React',
        difficulty: 'Medium',
        question: 'How would you implement a stop-watch component in React?',
        answer:
          `Find the  code implementation in code sandbox link`
      },
{
  id: '2026-09-21-node-event-loop-phases',
    topic: 'Node.js',
      difficulty: 'Hard',
        question: 'Name the main phases of the Node.js event loop and what runs in each.',
          answer:
  'In order: timers (setTimeout/setInterval callbacks), pending callbacks (deferred I/O callbacks), poll (retrieve new I/O events, execute I/O callbacks), check (setImmediate callbacks), and close callbacks (e.g. socket.on("close")). process.nextTick and Promise microtasks run between every phase, not as a phase themselves.',
      },
{
  id: '2026-09-21-html-semantic-tags',
    topic: 'HTML',
      difficulty: 'Easy',
        question: 'Why prefer <button> over a styled <div onClick> for a clickable action?',
          answer:
  '<button> is keyboard-focusable and operable with Enter/Space by default, is announced correctly by screen readers as a button, and participates in form submission when needed. A <div> requires manually re-implementing all of that with tabindex, key handlers, and ARIA roles to reach the same baseline accessibility.',
      },
{
  id: '2026-09-21-system-design-rate-limiter',
    topic: 'System Design',
      difficulty: 'Hard',
        question: 'Design a rate limiter for a public API. What algorithm would you pick and why?',
          answer:
  'A token bucket is usually the best default: each client has a bucket that refills at a fixed rate and requests consume tokens, which allows short bursts while enforcing a long-run average. Sliding window log/counter variants give smoother limits at higher memory cost. Store bucket state in Redis with atomic INCR/EXPIRE (or a Lua script) so it works correctly across multiple API instances.',
      },
    ],
  },
{
  date: '2026-09-19',
    questions: [
      {
        id: '2026-09-19-react-usememo',
        topic: 'React',
        difficulty: 'Easy',
        question: 'When should you actually reach for useMemo, and when is it a premature optimization?',
        answer:
          'Reach for it when a computation is genuinely expensive (large array processing, complex derived data) or when you need referential stability to avoid re-triggering a child\'s effect or memoized render. For cheap calculations, useMemo\'s own bookkeeping overhead can outweigh the savings, so profile before adding it.',
      },
      {
        id: '2026-09-19-ts-unknown-vs-any',
        topic: 'TypeScript',
        difficulty: 'Easy',
        question: 'What is the practical difference between the `unknown` and `any` types?',
        answer:
          '`any` opts a value out of type checking entirely, so you can call anything on it without the compiler complaining. `unknown` still requires you to narrow the type (via a type guard or assertion) before you can operate on the value, which keeps type safety intact while still allowing values whose shape isn\'t known up front.',
      },
      {
        id: '2026-09-19-behavioral-disagree',
        topic: 'Behavioral',
        difficulty: 'Medium',
        question: 'Tell me about a time you disagreed with a technical decision made by a senior engineer.',
        answer:
          'Strong answers use a structure like STAR (Situation, Task, Action, Result), focus on the reasoning you brought rather than being "right," show you raised the concern respectfully and with evidence (benchmarks, past incidents), and end with what changed as a result — including cases where you were the one who ended up convinced.',
      },
    ],
  },
{
  date: '2026-09-18',
    questions: [
      {
        id: '2026-09-18-css-specificity',
        topic: 'CSS',
        difficulty: 'Easy',
        question: 'Rank these by specificity: an ID selector, a class selector, an inline style, and `!important`.',
        answer:
          '`!important` overrides normal specificity rules entirely (lowest priority within its own category still applies among multiple !important rules), then inline styles, then ID selectors, then class/attribute/pseudo-class selectors, then element/pseudo-element selectors. In practice, treat !important and deep ID chains as a smell rather than a tool.',
      },
      {
        id: '2026-09-18-testing-unit-vs-integration',
        topic: 'Testing',
        difficulty: 'Medium',
        question: 'How do you decide whether something deserves a unit test or an integration test?',
        answer:
          'Unit test pure logic and isolated functions/components where mocking dependencies is cheap and the behavior under test is well-defined. Reach for an integration test when the value comes from several pieces working together correctly — e.g. a form submission that touches validation, state, and an API call — since testing each piece in isolation would miss the seams between them.',
      },
      {
        id: '2026-09-18-js-closures',
        topic: 'JavaScript',
        difficulty: 'Easy',
        question: 'What is a closure, and give a practical use case beyond the textbook counter example.',
        answer:
          'A closure is a function bundled with references to the variables from the scope it was defined in, even after that outer scope has returned. A practical use is a memoization wrapper: an inner function closes over a cache object created once when the outer function runs, so repeated calls can check and update that shared cache.',
      },
    ],
  },
];

export default entries;
