import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import Home from "../pages/Home";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Login } from "../pages/Login";
import { PrivateRoutes } from "./PrivateRoutes";
import { Logout } from "../components/Logout";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Logout />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<PrivateRoutes />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  );
};
