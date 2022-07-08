import React from "react";
import { Route, Routes } from 'react-router-dom';

import Login from "./pages/login";
import Home from "./pages/home";

export function MainRoutes(){
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}