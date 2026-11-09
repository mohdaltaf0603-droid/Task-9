import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/components.css";
import "./styles/navibar.css";
import "./styles/hero.css";
import "./styles/section.css";
import "./styles/responsive.css";
import "./styles/figma-mobile.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);