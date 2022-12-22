import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter} from "react-router-dom";
import RoutesList from "./RoutesList";
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main>
          <RoutesList/>
          </main>
        </div>
      </BrowserRouter>
      </div>
  )

}

export default App;


