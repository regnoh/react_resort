import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Error from "./pages/Error";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/rooms" component={Rooms} exact />
        <Route path="/rooms/:slug" component={RoomDetail} exact />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
