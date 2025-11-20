import React, { JSX } from "react";
import { Spin } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "pages/SignIn";
import SignUpPage from "pages/SignUp";
import SideBarLayout from "components/layouts/SideBarLayout"
import Home from 'pages/Dashboard/Home'
import Transactions from 'pages/Dashboard/Transactions'
import { routerPaths } from "./routerPaths";
import { useAuth } from "providers/AuthProvider";

export const AppRoutes: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();

  const protect = (element: JSX.Element) => {
    if (loading)
      return (
        <div style={{ display: "flex", justifyContent: "center", alignItems:'center', height:'100vh', backgroundColor:'white' }}>
          <Spin size="large" />
        </div>
      );
    return isAuthenticated ? element : <Navigate to={routerPaths.signIn} />;
  };
  
  const redirectIfAuth = (element: JSX.Element) => {
    if (loading)
      return (
        <div style={{ display: "flex", justifyContent: "center", alignItems:'center', height:'100vh', backgroundColor:'white' }}>
          <Spin size="large" />
        </div>
      );
    return isAuthenticated ? <Navigate to={routerPaths.dashboard} /> : element;
  };
  

  return (
    <Routes>
      <Route
        path={routerPaths.root}
        element={<Navigate to={routerPaths.signIn} />}
      />
      <Route
        path={routerPaths.signIn}
        element={redirectIfAuth(<SignInPage />)}
      />
      <Route
        path={routerPaths.signUp}
        element={redirectIfAuth(<SignUpPage />)}
      />
      <Route
        path={routerPaths.dashboard + "/*"} 
        element={protect(<SideBarLayout />)}
      >
        <Route index element={<Home />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="invoices" element={<div>invoices page</div>} />
        <Route path="wallets" element={<div>wallets page</div>} />
        <Route path="settings" element={<div>settings page</div>} />
      </Route>
      <Route path="*" element={<Navigate to={routerPaths.root} />} />
    </Routes>
  );
};

export default AppRoutes;
