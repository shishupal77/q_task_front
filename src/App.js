import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import EditData from "./screens/EditData";
import AddData from './screens/AddData'

function App() {
  const isLoggedIn = localStorage.getItem("token") ;
  return (
  <Router>
    <Routes>
      <Route exact path="/login" element={<LoginScreen />} />
      <Route exact path="/register" element={<RegisterScreen />} />
      <Route exact path="/" element={isLoggedIn ? <HomeScreen /> : <LoginScreen />} />
      <Route exact path="/adddata" element={<AddData />} />
      <Route exact path="/edit/:id" element={<EditData />} />
    </Routes>
  </Router>
  );
}

export default App;
