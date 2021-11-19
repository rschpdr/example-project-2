import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
