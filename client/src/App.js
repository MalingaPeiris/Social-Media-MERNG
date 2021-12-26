import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import "semantic-ui-css/semantic.min.css";
import "./App.css";

//import MenuBar from "./component/MenuBar"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    //<div><h1>asd</h1>console.log('hi')</div>

    <Router>
      <Routes>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Routes>
    </Router>
  );
}

export default App;
