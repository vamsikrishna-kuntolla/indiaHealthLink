import React, { lazy } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import config from "../config";
import Loadable from "../components/Loadable";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "../components/PrivateRoute";

const HomePage = Loadable(lazy(() => import("../views/Home/home.page")));
const SignupPage = Loadable(lazy(() => import("../views/Signup/index")));
const LoginPage = Loadable(lazy(() => import("../views/Login/index")));

//-----------------------|| ROUTING RENDER ||-----------------------//
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={config.defaultPath} />} />
      <Route
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
