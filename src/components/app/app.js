import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import Login from "../login/login";
import { Header } from "../Header/Header";
import User from "../../pages/user/user";
import Users from "../../pages/users/users";
import LoginForm from "../../pages/lastTest/form";
import EditUserPage from "../../pages/lastTest/editUserPage";
import peopleReducer from "../../pages/lastTest/authSlice/authslice";
import PageUser from "../../pages/lastTest/pageUser";

const store = configureStore({
  reducer: {
    users: peopleReducer,
  },
});

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />

          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/users" element={<Users />} />
              <Route path="/user" element={<User />} />
              <Route path="/people/edit/" component={<EditUserPage />} />
              <Route path="/people" component={<PageUser />} />
              <Route path="/form" element={<LoginForm />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
