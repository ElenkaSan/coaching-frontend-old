import React from "react";
import { Routes, Route, Navigate } from "react-router";
// import {Routes, Route, Navigate } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import useLocalStorage from "./hooks/useLocalStorage";

// import LoadingSpinner from "./common/LoadingSpinner";
// import Api from "./api";
// import UserContext from "./auth/UserContext";

import Header from "./components/Header";
import Homepage from "./homepage/Homepage";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import Business from "./components/Business";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

import SignupForm from "./auth/SignupForm"
import LoginForm from "./auth/LoginForm"
// import ProfileForm from "./auth/ProfileForm"
// import UserPage from "./auth/UserPage"
// import UserContext from "../auth/UserContext"

// import RoutesApp from "./components/Routes";
// import jwt from "jsonwebtoken";
// require("dotenv").config();

function App({ login, signup, updateUser }) {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        {/* <Route path="/profile" element={<UserPage />} /> */}
        {/* <Route path="/update" element={<ProfileForm updateUser={updateUser} />} /> */}
      </Routes>
    </div>
  );
}

export default App;