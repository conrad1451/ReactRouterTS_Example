import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Home from "./pages/Home"
// import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/contact" element={<Contact />}></Route> */}
          {/* <Route path="/portfolio" element={<Portfolio />}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
