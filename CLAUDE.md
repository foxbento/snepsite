# snepsite

Personal site for smores. Next.js 16, React 19, Tailwind CSS, pnpm.

## Code conventions

### Prefer hooks and browser primitives over raw `useEffect`

Avoid `useEffect` when a more semantic alternative exists. React 19 and modern browser APIs cover most cases:

- **DOM event listeners** — use native elements that handle events implicitly. `<dialog>` handles Escape natively; no listener needed. Prefer semantic HTML over `useEffect(() => window.addEventListener(...))`.
- **Data fetching** — use `use()` with a cached promise, server components, or a data-fetching library. Not `useEffect` + `useState`.
- **Derived state** — compute it inline or with `useMemo`. Never sync it with `useEffect` + `setState`.
- **Subscriptions / external stores** — use `useSyncExternalStore`.
- **One-off DOM setup** — prefer refs + event handlers on the element itself.

`useEffect` is appropriate when genuinely synchronising with something outside React that has no better API (e.g. a third-party library, or arrow key listeners that truly have no DOM equivalent). Even then, keep the dependency array minimal and stable.

### localStorage / client-only state

Use a custom hook (e.g. `useNsfwToggle`) that initialises to `null` (undecided) and reads `localStorage` in a single `useEffect` after mount. This avoids hydration mismatches. Expose semantic actions (`accept`, `decline`, `toggle`) rather than raw setters.
