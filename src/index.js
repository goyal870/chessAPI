import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./common/Header"
import HomePage from "./homepage/HomePage"
import AboutPage from "./aboutpage/AboutPage"
import Profile from "./player/Profile"
import Stats from "./player/Stats"
import Titleplayer from "./player/Titleplayer"

ReactDOM.render(

  <BrowserRouter>

    <Header/>
    <Routes>

      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/stats" element={<Stats/>} />
      <Route path="/titleplayer" element={<Titleplayer/>} />
    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);

