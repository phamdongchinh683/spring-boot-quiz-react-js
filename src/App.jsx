import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/template/Layout";
import Home from "./components/pages/Home";
import NotFoundError from "./components/pages/NotFound/NotFound";
import AuthForm from "./components/pages/Auth/AuthForm";
import PageAdmin from "./components/pages/admin/index";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route index element={<Home />} />
        <Route path="login" element={<AuthForm swapForm={true} />} />
        <Route path="signup" element={<AuthForm swapForm={false} />} />
        <Route path="admin" element={<PageAdmin />} />
        <Route path="*" element={<NotFoundError />} />
      </Route>
    </Routes>
  );
}

export default App;
