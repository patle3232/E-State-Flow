import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";
import Contact from "./Pages/Contact";
import Properties from "./Pages/Properties";
import PropertyDetails from "./Pages/PropertyDetails";
import NotFound from  "./Pages/NotFound";









function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />

        <Route path="/*" element={<NotFound />} />



      </Routes>
    </>
  );
}

export default App;