import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Contact from "./Contact";
import Blog from "./Blog";

export default function Content() {
    return (
        <div className={'content'}>
            <Routes>
                <Route exact path="/"/>
                <Route path='/contact' element={<Contact/>} />
                <Route path='/blog' element={<Blog/>} />
            </Routes>
        </div>
    );
}
