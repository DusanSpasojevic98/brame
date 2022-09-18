import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import LoginPage from "./pages/login/LoginPage.js"

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
