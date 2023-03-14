import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/project";
import Contact from "./pages/contact";
import Header from "./components/header";

function App() {
  return (
    <Router>
      {<Header />}
      <div>
        <Routes>
          <Route path="/my-portfolio" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
