import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import HomePage from "../Admin/Pages/HomePage";
import LoginPage from "../Admin/Pages/LoginPage";
import UsersPage from "../Admin/Pages/UsersPage";
import UserDetailPage from "../Admin/Pages/UserDetailPage";
import PartnerDetailPage from "../Admin/Pages/PartnerDetailPage"; 
import PartnersPage from "./Pages/PartnersPage";
import PublicationsPage from "./Pages/PublicationsPage";

function AdminPannel() {
  const [isConnected, setIsConnected] = useState(
    localStorage.getItem("isConnected") === "true"
  );
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  React.useEffect(() => {
    localStorage.setItem("isConnected", isConnected);
  }, [isConnected]);

  return (
    <div className="flex">
      {/* Conditionally render Sidebar and Header */}
      {!isLoginPage && <Sidebar />}
      <div className="flex-grow">
        {!isLoginPage && <Header setIsConnected={setIsConnected} />}
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setIsConnected={setIsConnected} />}
          />
          <Route
            path="/home"
            element={isConnected ? <HomePage /> : <LoginPage />}
          />
          <Route
            path="/users"
            element={isConnected ? <UsersPage /> : <LoginPage />}
          />
          <Route
            path="/users/:userId" // Route for user details
            element={isConnected ? <UserDetailPage /> : <LoginPage />}
          />
          <Route
            path="/partenaires"
            element={isConnected ? <PartnersPage /> : <LoginPage />}
          />
          <Route
            path="/partners/:partnerId" // Route for partner details
            element={isConnected ? <PartnerDetailPage /> : <LoginPage />}
          />
          <Route
            path="/publications"
            element={isConnected ? <PublicationsPage /> : <LoginPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPannel;
