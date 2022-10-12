import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Routes,Route} from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Navi/>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/product" element={<Dashboard />}></Route>
        <Route path="/cart" element={<CartDetail />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
