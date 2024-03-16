import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/index";
import Home from "./pages/Home/index";
import NotFoundError from "./pages/NotFound/index";
import AuthForm from "./pages/Auth/Components/AuthForm";
import PageAdmin from "./pages/Admin/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
