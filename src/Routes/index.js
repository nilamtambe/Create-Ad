import React from 'react';
import Dashboard from '../components/Dashboard';
import {Routes,Route} from "react-router-dom";
import CreateTextAd from '../components/CreateTextAd';
import CreateMediaAd from '../components/CreateMediaAd';
import Ads from '../components/Ads';

function index() {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/ads' element={<Ads/>} />
        <Route path='/createmediaad' element={<CreateMediaAd/>} />
        <Route path='/createtextad' element={<CreateTextAd/>} />
       
     </Routes>
    </div>
  )
}

export default index
