import React from "react";
import "./App.css";
import Navbar from "./components/static/Navbar";
import Landing from "./components/pages/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Packages from "./components/pages/Packages";
import FreeGenaration from "./components/pages/FreeGenaration";
import ErrorPage from "./components/pages/ErrorPage";
import QRCode from "./components/test/QRCode";
import PremiumGenaration from "./components/pages/PremiumGenaration";
import Fixing from "./components/pages/Fixing";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <div className="container z-10 max-w-screen-2xl lg:px-20 px-5 lg:my-28 my-28">
          <Routes>
            <Route path="/" element={<Landing></Landing>}></Route>
            <Route path="/packages" element={<Packages></Packages>}></Route>
            <Route path="/packages/basic" element={<FreeGenaration></FreeGenaration>}></Route>
            <Route path="error/access-denied" element={<ErrorPage></ErrorPage>}></Route>
            <Route path="/test" element={<QRCode></QRCode>}></Route>
            <Route path="/error/fixing" element={<Fixing></Fixing>}></Route>
            <Route path="/packages/premium" element={<PremiumGenaration></PremiumGenaration>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
