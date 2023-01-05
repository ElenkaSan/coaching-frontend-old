import React from "react";
import { Routes, Route, Navigate } from "react-router";
// import {Routes, Route, Navigate } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import useLocalStorage from "./hooks/useLocalStorage";

// import LoadingSpinner from "./common/LoadingSpinner";
// import Api from "./api";
// import UserContext from "./auth/UserContext";

import Header from "./Header";
import Homepage from "../homepage/Homepage";
import AboutUs from "./AboutUs";
import Programs from "./Programs";
import Business from "./Business";
import Publications from "./Publications";
import Contact from "./Contact";

import SignupForm from "../auth/SignupForm"
import LoginForm from "../auth/LoginForm"
import ProfileForm from "../auth/ProfileForm"
import UserPage from "../auth/UserPage"
// import UserContext from "../auth/UserContext"

// import jwt from "jsonwebtoken";
// require("dotenv").config();

// React Router will help navigate different routes for the vacation time app
// based on whether the user is logged in or not. 
// This will prevent users from access unauthorized paths. 

  const RoutesApp = ({ login, signup, updateUser }) => {

  // const { isLoggedIn } = useContext(UserContext);

  console.debug(
      "Routes",
      `login=${typeof login}`,
      `register=${typeof register}`,
  );

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
        {/* </Router> */}
        {/* <Switch>
        {isLoggedIn
                ? (<>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/company">
            <AboutUs />
          </Route>
         <Route exact path="/programs">
             <Programs />
          </Route>
          <Route exact path="/business">
             <Business />
          </Route>
          <Route exact path="/publications">
             <Publications />
          </Route>
          <Route exact path="/contact">
             <Contact />
          </Route>
          <Route path="/profile">
            <UserPage />
          </Route>
          <Route path="/update">
              <ProfileForm updateUser={updateUser} />
            </Route>
            <Route path="/" element={<Navigate replace to="/" />} />
          </>) : (<>
            <Route exact path="/">
            <Homepage />
          </Route>
            <Route exact path="/company">
            <AboutUs />
          </Route>
         <Route exact path="/programs">
             <Programs />
          </Route>
          <Route exact path="/business">
             <Business />
          </Route>
          <Route exact path="/publications">
             <Publications />
          </Route>
          <Route exact path="/contact">
             <Contact />
          </Route>
          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>
          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>
          <Route path="/" element={<Navigate replace to="/" />} />
          </>)
            }
        </Switch> */}
     


export default RoutesApp;