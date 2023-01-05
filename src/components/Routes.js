import React, { useContext } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Homepage from "../homepage/Homepage";
import AboutUs from "../components/AboutUs";
import Programs from "../components/Programs";
import Business from "../components/Business";
import Publications from "../components/Publications";
import Contact from "../components/Contact";

import SignupForm from "../auth/SignupForm"
import LoginForm from "../auth/LoginForm"
import ProfileForm from "../auth/ProfileForm"
import UserPage from "../auth/UserPage"
import UserContext from "../auth/UserContext"
import WeatherPage from "../WeatherPage/WeatherPage";


const Routes = ({ login, signup, updateUser }) => {

  const { isLoggedIn } = useContext(UserContext);


  return (
    <div className="pt-5">
      {/* <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupForm signup={signup} />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/update" element={<ProfileForm updateUser={updateUser} />} />
      </Routes> */}

    <Switch>
      {isLoggedIn
        ? (<>
        <Route index path="/" component={<Homepage />} />
        <Route path="/aboutus" component={<AboutUs />} />
        <Route path="/programs" component={<Programs />} />
        <Route path="/business" component={<Business />} />
        <Route path="/publications" component={<Publications />} />
        <Route path="/contact" component={<Contact />} />
        <Route path="/profile" component={<UserPage />} />
        <Route path="/update" component={<ProfileForm updateUser={updateUser} />} />
        <Route path="/weather" component={WeatherPage} />
        <Redirect to="/" /> 
      </>) : (<>
        <Route index path="/" component={<Homepage />} />
        <Route path="/aboutus" component={<AboutUs />} />
        <Route path="/programs" component={<Programs />} />
        <Route path="/business" component={<Business />} />
        <Route path="/publications" component={<Publications />} />
        <Route path="/contact" component={<Contact />} />
        <Route path="/signup" component={<SignupForm signup={signup} />} />
        <Route path="/login" component={<LoginForm login={login} />} />
        <Route path="/weather" component={WeatherPage} />
        <Redirect to="/" />
      </>)
    }
   </Switch>

 </div>
  );
}
     


export default Routes;