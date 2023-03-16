import { NavigateFunction } from "react-router-dom";

export const goToLogin = (navigate: NavigateFunction) => {
  navigate("/login");
};

export const goToSignUp = (navigate: NavigateFunction) => {
  navigate("/signUp");
};

export const goToSignUpAddress = (navigate: NavigateFunction) => {
  navigate("/signUp/address");
};

export const goToFeed = (navigate: NavigateFunction) => {
  navigate("/");
};

export const goToRestaurants = (navigate: NavigateFunction, id: string) => {
  navigate(`/feed/${id}`);
};

export const goToCart = (navigate: NavigateFunction) => {
  navigate("/cart");
};

export const goToProfile = (navigate: NavigateFunction) => {
  navigate("/profile");
};

export const goToLastPage = (navigate: NavigateFunction) => {
  navigate(-1);
};
