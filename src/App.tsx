// import {useState, useEffect} from 'react';
// import {createContext} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth'
// import {auth} from './service/firebase';

import { NewRoom } from "./pages/newRoom";
import {Home} from "./pages/Home";
import {Room} from "./pages/Room";

import {AuthContextProvider} from "./contexts/AuthContexts"
import { AdminRoom } from "./pages/AdminRoom";



function App() {
  
  return (
    <AuthContextProvider>
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/rooms/new' exact component={NewRoom}/>
            <Route path='/room/:id' component={Room}/>
            <Route path='/admin/room/:id' component={AdminRoom}/>
          </Switch>
      </BrowserRouter>
    </AuthContextProvider>

    
  );
}

export default App;
