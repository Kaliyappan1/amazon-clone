import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Procedcheckout from "./Procedcheckout";
// import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>

                <Header />
                <Home />
                {/* <Footer/> */}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          
          <Route
            path="/processcheckout"
            element={
              <>
                <Header/>
                <Procedcheckout />
              </>
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
