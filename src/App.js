// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
