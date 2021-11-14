import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/register";
import RegisterDetail from './pages/registerDetail';

const App = () => {
    return (
        <Router>
      <Routes>
        <Route exact path="/" element={ <Home/> }>
        </Route>
        <Route exact path="/Home" element={ <Home/> }>
        </Route>
        <Route path="/register" element={ <Register/> }>
        </Route>
        <Route path="/registerDetail" element={ <RegisterDetail/> }>
        </Route>
      </Routes>
    </Router>
    )
}

export default App;


