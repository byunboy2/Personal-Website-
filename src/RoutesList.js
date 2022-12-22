import { Routes, Route } from 'react-router-dom';
import Personal from "./Personal";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";
import Home from "./Home";

function RoutesList() {
  return (
    <div className='RoutesList col-md-8 offset-md-2'>
    <Routes>
      <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/personal"
          element={<Personal />}
        />
        <Route
          path="/resume"
          element={<Resume />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          element={<p>Hmmm. I can't seem to find what you want.</p>}
        />
      </Routes>
    </div >
  );
};

export default RoutesList;





