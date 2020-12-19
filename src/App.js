import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat.js";

function App() {

  return (
    <div className="app">
      <Router>
        <Header/>
          <div className="app__body">
            <Sidebar />

            <Switch>
              <Route path="/:roomId">
                <Chat/>
              </Route>
              <Route path="/">
                <h1>Welcome</h1>
              </Route>
            </Switch>
          </div>
        {/*  */}
      </Router>
    </div>
    
  );
}

export default App;
