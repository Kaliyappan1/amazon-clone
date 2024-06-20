import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { type } from "@testing-library/user-event/dist/type";
import Orders from './Orders'
// import Footer from "./Footer";

const promise = loadStripe(
  'pk_test_51PT1TfRxuVmyxJXTA07WGpxUSIjlN4vkaKrFLTl9SnSNuqdkEjW7YkvtB0mXFuxzCXJIpyNbTVHFkJwwKb1KaRBr003ksjoo92'
)

function App() {
  const [ {}, dispatch] = useStateValue();

  useEffect( () => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null,
        })

      }
    })
  }, []);

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
              path="/Orders"
              element={
                <>
                    <Header />
                  <Orders />
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
            path="/payment"
            element={

              <>
                <Header/>
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              </>
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
