import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import LoginPage from "./pages/login/LoginPage.js"
import HomeCampaignsPage from "./pages/home/HomeCampaignsPage.js";

function App() {
  //Should regulate routes if there is no token or token expires
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/home" element={<HomeCampaignsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
