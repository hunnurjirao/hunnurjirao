import React from 'react';
import { Switch, Route } from 'react-router-dom';
import "./App.css"
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Main from './components/Main';
import MLProj from './components/MLProj';
import Navbar from './components/Navbar';
import OtherProj from './components/OtherProj';
import WebProj from './components/WebProj';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>

        <Route exact path='/'><Home /></Route>
        <Route path='/main'><Main /></Route>
        <Route path='/mlproj'><MLProj /></Route>
        <Route path='/webproj'><WebProj /></Route>
        <Route path='/otherproj'><OtherProj /></Route>
        <Route path='/blogs'><Blogs /></Route>
        <Route path='/contactus'><ContactUs /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
