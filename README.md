# Dev Interview Digest

A small React app that publishes an ever-growing, searchable archive of
software / web developer interview questions — grouped by day, filterable
by topic (JavaScript, React, CSS, HTML, Node.js, System Design, etc.),
built with **React 19**, **Webpack 5**, and plain **CSS/HTML** (no UI
libraries), and deployed to **GitHub Pages**.

## 1. Local setup

```bash
npm install
npm start        # runs webpack-dev-server at http://localhost:3000
```

```bash
npm run build     # production build, output in /dist
```

## 2. Publishing a daily update

All content lives in one file: **`src/data/entries.js`**. There is no
database or CMS — you edit this file and commit it.

1. Open `src/data/entries.js`.
2. Copy an existing day-block (or the template comment at the top of the
   file) and paste a **new** object at the top of the `entries` array:

   ```js
   {
     date: '2026-09-23',
     questions: [
       {
         id: '2026-09-23-react-suspense',
         topic: 'React',
         difficulty: 'Medium',
         question: 'What does Suspense actually do under the hood?',
         answer: 'A short, direct answer goes here.',
       },
       // add as many questions as you asked/collected that day
     ],
   },
   ```

3. `topic` should match one of the keys in `src/data/topics.js` (or add a
   new key + hex color there if you're introducing a new topic — it'll
   show up in the filter bar automatically).
4. `id` just needs to be unique across the whole file — `date-short-slug`
   is a simple convention.
5. Save, then commit and push:

   ```bash
   git add src/data/entries.js
   git commit -m "Add interview questions for 2026-09-23"
   git push
   ```

That's it — the entries array is sorted by date in the app itself, so you
don't need to keep it in perfect order, and the GitHub Actions workflow
(below) rebuilds and redeploys the site automatically on every push.

## 3. Deploying to GitHub Pages

You get **two** deployment options; use whichever you prefer (or both —
the Actions workflow is the recommended default and needs no local step).

### Option A — Automatic (recommended)

This repo ships with `.github/workflows/deploy.yml`, which builds the app
and publishes `/dist` to GitHub Pages on every push to `main`.

One-time setup in your GitHub repo:

1. Push this project to a new GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or click **Run workflow** on the *Build and deploy to
   GitHub Pages* workflow under the **Actions** tab). Your site will be
   live at `https://<your-username>.github.io/<your-repo-name>/`.

From then on, every push that updates `src/data/entries.js` (or anything
else) redeploys the live site within a minute or two — this is what gives
you "write daily updates and have them published."

### Option B — Manual, via the `gh-pages` package

If you'd rather not use Actions:

1. Update the `"homepage"` field in `package.json`:

   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>"
   ```

2. Run:

   ```bash
   npm run deploy
   ```

   This builds the app and pushes `/dist` to a `gh-pages` branch (via the
   `gh-pages` npm package). In **Settings → Pages**, set **Source** to
   "Deploy from a branch" → `gh-pages` → `/ (root)`.

## 4. Project structure

```
public/
  index.html            HTML template (Webpack injects the bundle)
  favicon.svg
src/
  index.js              React 19 entry point (createRoot)
  App.jsx                Top-level state: search + topic filter
  components/
    Header.jsx           Masthead + stats (question/day counts)
    SearchBar.jsx
    TopicFilter.jsx       Topic chips, colour-coded
    DailyDigest.jsx       One date section
    QuestionCard.jsx      Expandable question/answer row
    Footer.jsx
  data/
    entries.js            <-- YOU EDIT THIS FILE DAILY
    topics.js              Topic → colour registry
  styles/
    index.css              All styling (plain CSS, custom properties)
webpack.config.js
.babelrc
.github/workflows/deploy.yml
```

## 5. Notes

- Styling is plain CSS with custom properties, no Tailwind/Bootstrap/CSS-in-JS.
- `webpack.config.js` uses `output.publicPath: 'auto'`, so the same build
  works locally, on a GitHub Pages *project* page
  (`username.github.io/repo-name/`), and on a *user* page or custom
  domain, without editing any paths.
- There's no router — it's a single page with client-side search/filter
  state, which sidesteps the "404 on refresh" problem GitHub Pages has
  with client-side routed apps.
