import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/register";


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
      </Routes>
    </Router>
    )
}

export default App;


