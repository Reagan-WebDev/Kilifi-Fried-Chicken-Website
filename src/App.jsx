import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import ScrollToTop from "./components/ScrollToTop";
import FloatingOrderButton from "./components/FloatingOrderButton";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>

      <Navbar />

      <ScrollToTop />

      <FloatingOrderButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

      <WhatsappButton />

    </Router>
  );
}

export default App;