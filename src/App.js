import React from "react";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import MyList from "./components/MyList";

function App(props) {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Container />} />
          <Route exact path={"/details"} element={<Details />} />
          <Route exact path={"/myList"} element={<MyList />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default App;
