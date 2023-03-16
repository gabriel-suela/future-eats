import { Routes, BrowserRouter, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import Feed from "../pages/Feed";
import LoginPage from "../pages/LoginPage";
import Profile from "../pages/Profile";
import Restaurants from "../pages/Restaurants";
import SignUp from "../pages/SignUp";
import SignUpAddress from "../pages/SignUpAddress";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Feed />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signUp/address" element={<SignUpAddress />} />
      <Route path="/feed/:restaurantId" element={<Restaurants />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;
