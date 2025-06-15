import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gallery from "./components/Gallery";
import MetricsDashboard from "./components/MetricsDashboard";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/metrics" element={<MetricsDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}