import React from "react";
import "./App.css";
import {hot} from "react-hot-loader"
import Navbar from "./components/Navbar"

function App() {
    return(
        <div id="App">
            <Navbar />
        </div>
    );
}

export default hot(module)(App);