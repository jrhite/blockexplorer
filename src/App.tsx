import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Dashboard from "./Dashboard";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <div className="App">
        <Dashboard />
      </div>
    </Router>
  );
}
