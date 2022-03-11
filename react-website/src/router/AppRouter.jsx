import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/shared/Layout";
import NotFound from "../containers/NotFound";
import Home from "../containers/Home";
import Members from "../containers/Members";
import "../styles/shared/Layout.css";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/members" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
