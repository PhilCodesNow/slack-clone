import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Hello World </h1>
      <Header/>
      {/* Sidebar */}
      <Sidebar />
      {/* React Router -> Chat Screen */}
      {/*  */}
    </div>
  );
}

export default App;
