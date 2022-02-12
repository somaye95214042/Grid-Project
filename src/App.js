import React from 'react';
import Header from "./Components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const App = () => {

    return(
        <div>
            <Router>
                <Header/>
                <Body/>
                <Footer/>
            </Router>
        </div>

    )
}

export default App;