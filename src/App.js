import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FirstPage from "./Pages/Front-page";
import SecondPage from "./Pages/Second-page";

function App() {
  return (
    <Router basename="/yoga">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
