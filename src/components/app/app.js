import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../login/login";
import { Header } from "../Header/Header";
import User from "../../pages/user/user";
import Users from "../../pages/users/users";



export function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route exact path="/users" element={<Users />} />
              <Route exact path="/user" element={<User />} />
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
