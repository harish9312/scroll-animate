import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AppSection } from "./AppSection";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <App />
);
