import { Routes, BrowserRouter, Route } from "react-router-dom";
import Feed from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUp from "../pages/signUpPage/SignUpPage";
import SignUpAddress from "../pages/signUpAddressPage/SignUpAddressPage";
import Restaurants from "../pages/RestaurantsPage/RestaurantsPage";
import Profile from "../pages/ProfilePage/ProfilePage";
import Cart from "../pages/CartPage/CartPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUp/address" element={<SignUpAddress />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feed/:restaurantId" element={<Restaurants />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
