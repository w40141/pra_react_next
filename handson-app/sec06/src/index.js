import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ColorProvider from "./ColorProvider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
