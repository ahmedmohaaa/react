import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navmenu from './component/Nav/Nav';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Portfolio from "./component/Portfolio/Portofolio";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer"

function App() {
  return (
    <Router>
      <Navmenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      < Footer />
    </Router>
  );
}

export default App;
