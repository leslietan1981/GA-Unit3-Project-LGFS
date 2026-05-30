import React, { useContext, useState } from "react";
import HomePage from "./components/HomePage.jsx";
import { Navigate, Route, Routes } from "react-router";
import cssMain from "./styles/App.module.css";
import UserContext from "./context/UserContext.js";
import AuthPage from "./components/AuthPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import AdminConfigsPage from "./components/AdminConfigsPage.jsx";
import AdminAccountsPage from "./components/AdminAccountsPage.jsx";

function App() {
  const [accessToken, setAccessToken] = useState("");
  //   const devToken =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMTdiMGE1ZDdmZmViY2ZkNmNjMTZiZiIsInVzZXJuYW1lIjoibmV3dXNlciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzgwMTA2ODczLCJleHAiOjE3ODAxOTMyNzN9.t28cfUhEBdEJKfClF45acIB2PFWhoUaJl6PgSEJuda8";
  //   const [accessToken, setAccessToken] = useState(devToken);
  const [displayName, setDisplayName] = useState("Guest");
  const [role, setRole] = useState("");

  return (
    <div className={`${cssMain["main-wrapper"]}`}>
      <UserContext.Provider
        value={{
          accessToken,
          setAccessToken,
          displayName,
          setDisplayName,
          role,
          setRole,
        }}
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
          <Route
            path="/user/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/configs"
            element={
              <AdminRoute>
                <AdminConfigsPage />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/accounts"
            element={
              <AdminRoute>
                <AdminAccountsPage />
              </AdminRoute>
            }
          />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
