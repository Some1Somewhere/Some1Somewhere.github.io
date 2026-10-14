import React from 'react';
import { hydrateRoot, createRoot } from "react-dom/client";
import App from './app/App';
import './index.css';

// react-snap prerenders each route to static HTML at build time; hydrate it if present.
const rootEl = document.getElementById("root");
if (rootEl.hasChildNodes()) {
    hydrateRoot(rootEl, <App />);
} else {
    createRoot(rootEl).render(<App />);
}
