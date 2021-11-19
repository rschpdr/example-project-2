import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import About from "./About";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
