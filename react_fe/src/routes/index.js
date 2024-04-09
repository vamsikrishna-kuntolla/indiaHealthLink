import React, { lazy } from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import config from "../config";
import Loadable from "../components/Loadable";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "../components/PrivateRoute";

const HomePage = Loadable(lazy(() => import("../views/Home/home.page")));

//-----------------------|| ROUTING RENDER ||-----------------------//
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={config.defaultPath} />} />
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
