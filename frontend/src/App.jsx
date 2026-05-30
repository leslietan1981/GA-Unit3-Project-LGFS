import React, { useContext, useState } from "react";
import HomePage from "./components/HomePage.jsx";
import { Navigate, Route, Routes } from "react-router";
import cssMain from "./styles/App.module.css";
import UserContext from "./context/UserContext.js";
import AuthPage from "./components/AuthPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const [accessToken, setAccessToken] = useState("");
  //   const devToken =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMTdiMGE1ZDdmZmViY2ZkNmNjMTZiZiIsInVzZXJuYW1lIjoibmV3dXNlciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzgwMTA2ODczLCJleHAiOjE3ODAxOTMyNzN9.t28cfUhEBdEJKfClF45acIB2PFWhoUaJl6PgSEJuda8";
  //   const [accessToken, setAccessToken] = useState(devToken);
  const [displayName, setDisplayName] = useState("Guest");
  return (
    <div className={`${cssMain["main-wrapper"]}`}>
      <UserContext.Provider
        value={{ accessToken, setAccessToken, displayName, setDisplayName }}
      >
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
