import ReactDOM from "react-dom/client";
import App from "./App";
import Root from "./Root";
import "./index.css";

const container = document.getElementById("root")!;
const app = (
  <Root>
    <App />
  </Root>
);

// Pages listed in src/seo/routes.ts are prerendered at build time. Hydrate
// when the server HTML belongs to the current URL; otherwise (dashboards,
// unknown URLs served the homepage via the SPA rewrite) render from scratch.
const prerenderedPath = container.dataset.prerendered;
const currentPath = window.location.pathname.replace(/\/+$/, "").toLowerCase() || "/";

if (prerenderedPath && prerenderedPath === currentPath) {
  ReactDOM.hydrateRoot(container, app);
} else {
  container.innerHTML = "";
  ReactDOM.createRoot(container).render(app);
}
