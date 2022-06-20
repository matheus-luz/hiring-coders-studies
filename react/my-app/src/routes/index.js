import React from 'react';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from '../pages/Home';
import Repositories from '../pages/Repositories/index';


function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/repositories" element={ <Repositories /> } />
      </Routes>
    </Router>
    
  );
}

export default MainRoutes;