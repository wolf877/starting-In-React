// import {useState, useEffect} from 'react';
// import {createContext} from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth'
// import {auth} from './service/firebase';

import { NewRoom } from "./pages/newRoom";
import {Home} from "./pages/Home";

import {AuthContextProvider} from "./contexts/AuthContexts"



function App() {
  
  return (
    <AuthContextProvider>
      <BrowserRouter>
          <Route path='/' exact component={Home}/>
          <Route path='/rooms/new' component={NewRoom}/>
      </BrowserRouter>
    </AuthContextProvider>

    
  );
}

export default App;
