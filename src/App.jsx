import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./contacts/Contact";

import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./dashboard/Dashboard";
import Analysis from "./dashboard/Analysis";
import Setting from "./dashboard/Setting";
import Home from "./pages/home";
import About from "./pages/About";
import User from "./setting/User"
import Admin from "./setting/Admin"
import ContactLayout from "./contacts/ContactLayout";
import Contactdetails from "./contacts/Contactdetails";
import UserCard from "./components/reusableComponent/UserCard";
import SmartComp from "./components/smart/SmartComp";




import bibek from './assets/photo(5).jpg'
import sugam from './assets/photo(4).jpg'
import anush from './assets/photo(3).jpg'
import Parent from "./components/liftingState/Parent";
import ParentContext from "./components/contextAPI/ParentContext";
import CounterComp from "./components/CounterComp";
import UserList from "./components/UserList";
import LoginFormHook from "./reactFormHook/LoginFormHook";
import FetchUser from "./fetchAPI/FetchUser";
import AxiosPost from "./fetchAPI/AxiosPost";
import ImageGen from "./ImageGenerator/ImageGen";

function App() {

  
  

  return (
    <div className="base" >
      <Navbar />
      <div className="route">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<ContactLayout />} >
<Route index element={<Contact />} />
          <Route path=":contactId" element={<Contactdetails />} />

        </Route>

        <Route path="/dashboard" element={<Dashboard />}>


        
          <Route path="settings" element={<Setting />} >

          <Route path="user" element ={<User/>}/>
             <Route path="admin" element ={<Admin/>}/>
          </Route>


          <Route path="analysis" element={<Analysis />} />

        </Route>

        
      </Routes>

      </div>
      
      <div className="container">
      <UserCard name="sugam fauzdar" age={23} email="sugamfauzdar@gmail.com"  image={sugam}/>
        <UserCard name="anush acharya" age={20} email="anushacharya@gmail.com" image={anush} />
          <UserCard name="bibek panthi" age={19} email="bibekpanthi@gmail.com" image={bibek} />
      </div>

{/* <p>this is smart comp</p>
<SmartComp/>

<p>parent</p>
<Parent/> */}
{/* <ParentContext/>

<CounterComp/>
<UserList/>
<LoginFormHook/> */}
{/* <FetchUser/> */}
{/* <AxiosPost/> */}
<ImageGen/>

    </div>
  );
}

export default App;
