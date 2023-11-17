import Navbar from "./components/Navbar"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Staff from "./pages/Staff"; // Import your Staff component
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Train from "./pages/Train";

function App(){
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/staff" element={<Staff />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/train" element={<Train />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;