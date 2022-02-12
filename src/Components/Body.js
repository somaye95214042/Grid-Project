
import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Find_A_Teacher from "../Pages/Find_A_Teacher";
import Community from "../Pages/Community";
import Become_A_Teacher from "../Pages/Become_A_Teacher";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const Body = () => {
    return (
        <div>
            <Routes>
                <Route path='/' exact={true} element={<Home/>} />
                <Route path='/find-a-teacher' element={<Find_A_Teacher/>} />
                <Route path='/community' element={<Community/>} />
                <Route path='/become-a-teacher' element={<Become_A_Teacher/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
            </Routes>
        </div>

    );
}
export default Body;