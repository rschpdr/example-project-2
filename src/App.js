import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
